import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, finalize, map, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {IssuesStore} from './issues.store';
import {createIssue, Issue, IssueFromServer, IssueState} from '../../global/models/issue';
import {CommentFromServer, Comment, createComment} from '../../global/models/comment';
import {ID} from '@datorama/akita';

export enum IssuesSortDirection {
    Asc = 'asc',
    Desc = 'desc'
}

export interface SearchIssuesResponse {
    total_count: number,
    items: Issue[]
}

@Injectable({
	providedIn: 'root'
})
export class IssuesService {

	constructor(
		private issuesStore: IssuesStore,
		private http: HttpClient) {
	}

    getIssuesTotalCount(state: IssueState): Observable<number> {
        this.issuesStore.setLoading(true);
        this.issuesStore.setError(null);

        return this.http.get<SearchIssuesResponse>(`${environment.appApi.baseUrl}/search/issues?q=repo:angular/angular+state:${state}&page=0&per_page=1`).pipe(
            map((response: SearchIssuesResponse) => {
                return Math.ceil(response.total_count / 10);
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }),
            finalize(() => this.issuesStore.setLoading(false))
        );
    }

	getIssues(page: number, state: IssueState, direction: IssuesSortDirection, perPage: number = 10): Observable<Issue[]> {
		this.issuesStore.setLoading(true);
		this.issuesStore.setError(null);

        let params = new HttpParams();
        params = params.set('state', state);
        params = params.set('sort', 'comments');
        params = params.set('direction', direction);
        params = params.set('per_page', perPage);
        params = params.set('page', page);

		return this.http.get<IssueFromServer[]>(`${environment.appApi.baseUrl}/repos/angular/angular/issues`, {params}).pipe(
			map((response: IssueFromServer[]) => {
                const result = response.map(issue => createIssue(issue));
                this.issuesStore.set(result);
                return result;
            }),
			catchError((error: HttpErrorResponse) => {
				return throwError(error);
			}),
			finalize(() => this.issuesStore.setLoading(false))
		);
	}

    getIssueComments(issue: Issue, page: number): Observable<Comment[]> {
        let params = new HttpParams();
        params = params.set('page', page);

        return this.http.get<CommentFromServer[]>(`${environment.appApi.baseUrl}/repos/angular/angular/issues/${issue.number}/comments`, {params}).pipe(
            map((response: CommentFromServer[]) => {
                const result = response.map(comment => createComment(comment));
                this.issuesStore.update(issue.id, issue => ({
                    ...issue,
                    comments: [...issue.comments, ...result]
                }));
                return result;
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        );
    }

    setActive(id: number) {
        this.issuesStore.setActive(id);
    }

    removeActive() {
        this.issuesStore.setActive(null);
    }

    clearComments(activeId: ID) {
        this.issuesStore.update(activeId, issue => ({
            ...issue,
            comments: []
        }));
    }
}
