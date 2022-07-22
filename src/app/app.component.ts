import {Component} from '@angular/core';
import {DateTime} from 'luxon';

@Component({
    selector: 'app-root',
    template: `
    <main>
        <router-outlet></router-outlet>
    </main>`,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor() {
    }
}
