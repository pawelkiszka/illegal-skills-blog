import { NgModule } from '@angular/core';
import { ArticlesRoutingModule } from './articles-routing.module';
import { DemoArticleComponent } from './demo-article/demo-article.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';

@NgModule({
    declarations: [
        BlogArticleComponent,
        DemoArticleComponent
    ],
    imports: [
        ArticlesRoutingModule
    ]
})
export class ArticlesModule {
}
