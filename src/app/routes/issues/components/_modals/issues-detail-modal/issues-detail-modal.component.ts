import {Component, OnInit} from '@angular/core';
import {Issue} from '../../../../../global/models/issue';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {IssuesService} from '../../../../../store/issues/issues.service';
import {finalize} from 'rxjs/operators';
import {IssuesQuery} from '../../../../../store/issues/issues.query';
import {ID} from '@datorama/akita';

@Component({
    selector: 'app-issues-detail-modal',
    templateUrl: './issues-detail-modal.component.html',
    styleUrls: ['./issues-detail-modal.component.scss']
})
export class IssuesDetailModalComponent implements OnInit {

    public commentsLoading = true;

    private page = 1;
    private canLoadMore = true;

    constructor(
        public ref: BsModalRef,
        private issuesService: IssuesService,
        public issuesQuery: IssuesQuery
    ) {
    }

    ngOnInit(): void {
    }

    loadIssueComments(issue: Issue) {
        this.commentsLoading = true;
        this.issuesService.getIssueComments(issue, this.page).pipe(
            finalize(() => this.commentsLoading = false)
        ).subscribe(comments => {
            this.canLoadMore = comments.length === 30
        });
    }

    close() {
        if (this.issuesQuery.getActiveId()) {
            this.issuesService.clearComments(this.issuesQuery.getActiveId()!);
            this.issuesService.removeActive();
        }
        this.ref.hide()
    }

    loadMore(issue: Issue) {
        if (this.canLoadMore && !this.commentsLoading) {
            this.page++;
            this.loadIssueComments(issue);
        }
    }
}
