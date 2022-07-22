import {Component, OnInit} from '@angular/core';
import {IssuesService, IssuesSortDirection} from '../../store/issues/issues.service';
import {IssuesQuery} from '../../store/issues/issues.query';
import {Issue, IssueState} from '../../global/models/issue';
import {
    BehaviorSubject,
    combineLatest,
    distinctUntilChanged,
    of,
    skip,
    switchMap,
    takeUntil,
    throwError,
    zip
} from 'rxjs';
import {DisposableComponent} from '../../shared/utils/disposable-component';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {BsModalService} from 'ngx-bootstrap/modal';
import {IssuesDetailModalComponent} from './components/_modals/issues-detail-modal/issues-detail-modal.component';

@Component({
    selector: 'app-issues',
    templateUrl: './issues.component.html',
    styleUrls: ['./issues.component.scss']
})
export class IssuesComponent extends DisposableComponent implements OnInit {

    public stateFilter$ = new BehaviorSubject(IssueState.Open);
    public sortDirection$ = new BehaviorSubject<IssuesSortDirection>(IssuesSortDirection.Desc);
    public page$ = new BehaviorSubject<number>(1);
    public totalCount$ = new BehaviorSubject<number>(0);

    public IssueState = IssueState;
    public IssuesSortDirection = IssuesSortDirection;

    constructor(
        public issuesQuery: IssuesQuery,
        private issuesService: IssuesService,
        private toastrService: ToastrService,
        private modalService: BsModalService,
    ) {
        super();

        this.page$.asObservable().pipe(
            takeUntil(this.componentDestroyed),
            switchMap((page) => {
                return this.issuesService.getIssues(page, this.stateFilter$.value, this.sortDirection$.value).pipe(
                    catchError(response => {
                        if (response?.error?.message) {
                            this.toastrService.error(response.error.message)
                        } else if (response?.message) {
                            this.toastrService.error(`${response?.message}`)
                        }

                        return of(undefined);
                    })
                )
            }),
        ).subscribe();

        combineLatest([
            this.stateFilter$.asObservable(),
            this.sortDirection$.asObservable()
        ]).pipe(
            skip(1),
            takeUntil(this.componentDestroyed)
        ).subscribe(() => {
            this.page$.next(1)
        })

        this.stateFilter$.pipe(
            switchMap(state => this.issuesService.getIssuesTotalCount(state)),
            takeUntil(this.componentDestroyed)
        ).subscribe(totalCount => {
            if (totalCount) {
                this.totalCount$.next(totalCount);
            }
        })
    }

    ngOnInit(): void {
    }

    issueClicked(issue: Issue) {
        this.issuesService.setActive(issue.id);

        const ref = this.modalService.show(IssuesDetailModalComponent, {class: 'modal-lg'});
        (ref.content as IssuesDetailModalComponent).loadIssueComments(issue);
    }
}
