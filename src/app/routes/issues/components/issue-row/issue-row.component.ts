import {Component, Input, OnInit} from '@angular/core';
import {Issue} from "../../../../global/models/issue";

@Component({
    selector: 'app-issue-row',
    templateUrl: './issue-row.component.html',
    styleUrls: ['./issue-row.component.scss']
})
export class IssueRowComponent implements OnInit {

    @Input() public issue: Issue;

    constructor() {
    }

    ngOnInit(): void {
    }

}
