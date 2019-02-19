import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
    {
      path: '',
      component: DashboardComponent
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