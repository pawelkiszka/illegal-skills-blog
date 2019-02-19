import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoArticleComponent } from './demo-article/demo-article.component';

const articlesRoutes: Routes = [
    {
        path: 'demo-article',
        component: DemoArticleComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(articlesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ArticlesRoutingModule {
}
