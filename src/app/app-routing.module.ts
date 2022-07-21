import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'issues',
        loadChildren: () => import('./routes/issues/issues.module').then(mod => mod.IssuesModule)
    },
    {
        path: '**',
        redirectTo: 'issues'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
