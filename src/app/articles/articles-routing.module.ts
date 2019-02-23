import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoArticleComponent } from './components/demo-article/demo-article.component';
import { ShareableLibraryWithPolymorphismComponent } from './components/shareable-library-with-polymorphism/shareable-library-with-polymorphism.component';

const articlesRoutes: Routes = [
    {
        path: 'demo-article',
        component: DemoArticleComponent
    },
    {
        path: 'shareable-library-with-polymorphism',
        component: ShareableLibraryWithPolymorphismComponent
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
