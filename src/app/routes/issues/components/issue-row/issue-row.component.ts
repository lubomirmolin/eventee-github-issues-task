import {Component, Input, OnInit} from '@angular/core';
import {Issue, IssueState} from '../../../../global/models/issue';

@Component({
    selector: 'app-issue-row',
    templateUrl: './issue-row.component.html',
    styleUrls: ['./issue-row.component.scss']
})
export class IssueRowComponent implements OnInit {

    public IssueState = IssueState;

    @Input() public issue: Issue;

    constructor() {
    }

    ngOnInit(): void {
    }

}
