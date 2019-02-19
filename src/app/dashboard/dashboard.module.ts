import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeReducer } from './store/store.reducer';
import { dashboardComponents } from './components';
import { BLOG_ITEM_SELECTED_VOTERS } from './services/blog-items-visibility/blog-item-selected.voter';
import { BlogItemSelectedByTitleVoter } from './services/blog-items-visibility/blog-item-selected-by-title.voter';
import { BlogItemSelectedByTopicVoter } from './services/blog-items-visibility/blog-item-selected-by-topic.voter.';
import { BlogItemSelectedService } from './services/blog-items-visibility/blog-item-selected.service';
import { BlogItemVisibilityController } from './services/blog-items-visibility/blog-item-visibility.controller';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedAppModule } from '../shared/shared-app.module';

@NgModule({
    declarations: [
        ...dashboardComponents,
    ],
    providers: [
        {provide: BLOG_ITEM_SELECTED_VOTERS, useClass: BlogItemSelectedByTitleVoter, multi: true},
        {provide: BLOG_ITEM_SELECTED_VOTERS, useClass: BlogItemSelectedByTopicVoter, multi: true},
        BlogItemSelectedService,
        BlogItemVisibilityController
    ],
    imports: [
        SharedAppModule,
        DashboardRoutingModule,
        StoreModule.forRoot({'store': storeReducer}), // todo: migrate to angular 7
    ]
})
export class DashboardModule {
}
