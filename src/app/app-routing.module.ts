import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './core/components/privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'articles',
        loadChildren: './articles/articles.module#ArticlesModule'
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
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
