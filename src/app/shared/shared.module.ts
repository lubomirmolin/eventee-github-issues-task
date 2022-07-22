import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { DateTimeToRelativePipe } from './pipes/datetime-to-relative.pipe';
import { PagingControlsComponent } from './components/paging-controls/paging-controls.component';
import {BsModalService, ModalModule} from 'ngx-bootstrap/modal';
import {InfiniteScrollComponent} from './components/infinite-scroll/infinite-scroll.component';
import { DateTimeToFormatPipe } from './pipes/datetime-to-format.pipe';
import { DateTimeToIsoDatePipe } from './pipes/datetime-to-iso-date.pipe';

const components = [
    PagingControlsComponent,
    InfiniteScrollComponent
];

const pipes = [
    DateTimeToRelativePipe,
    DateTimeToFormatPipe,
    DateTimeToIsoDatePipe
]

@NgModule({
    declarations: [
        ...components,
        ...pipes,
  ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
    ],
    exports: [
        BsDropdownModule,
        TooltipModule,
        ...components,
        ...pipes
    ]
})
export class SharedModule {
}
