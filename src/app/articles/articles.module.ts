import { NgModule } from '@angular/core';
import { ArticlesRoutingModule } from './articles-routing.module';
import { SharedAppModule } from '../shared/shared-app.module';
import { articlesComponents } from './components';

@NgModule({
    declarations: [
        ...articlesComponents
    ],
    imports: [
        ArticlesRoutingModule,
        SharedAppModule
    ]
})
export class ArticlesModule {
}
