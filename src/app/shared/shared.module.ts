import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { DateTimeToRelativePipe } from './pipes/datetime-to-relative.pipe';
import { PagingControlsComponent } from './components/paging-controls/paging-controls.component';

const components = [
    PagingControlsComponent
];

const pipes = [
    DateTimeToRelativePipe
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
