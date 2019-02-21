import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'articles',
        loadChildren: './articles/articles.module#ArticlesModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
