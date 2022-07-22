import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IssuesRoutingModule} from './issues-routing.module';
import {IssuesComponent} from './issues.component';
import {IssueRowComponent} from './components/issue-row/issue-row.component';
import {SharedModule} from "../../shared/shared.module";
import { IssuesDetailModalComponent } from './components/_modals/issues-detail-modal/issues-detail-modal.component';

@NgModule({
    declarations: [
        IssuesComponent,
        IssueRowComponent,
        IssuesDetailModalComponent
    ],
	imports: [
		CommonModule,
		IssuesRoutingModule,
		SharedModule,
	]
})
export class IssuesModule {
}
