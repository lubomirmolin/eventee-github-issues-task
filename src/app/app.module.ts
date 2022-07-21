import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ToastrModule.forRoot({positionClass: 'toast-bottom-center'}), // This library doesn't allow lazy loading ( https://github.com/scttcper/ngx-toastr/issues/400 )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
