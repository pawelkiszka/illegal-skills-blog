import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { components } from './components';
import { directives } from './directives';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeReducer } from './store/store.reducer';
import { StoreModule } from '@ngrx/store';
import { BLOG_ITEM_SELECTED_VOTER } from './services/filter-blog-items/blog-item-selected.voter';
import { BlogItemSelectedByTitleVoter } from './services/filter-blog-items/blog-item-selected-by-title.voter';
import { BlogItemSelectedByTopicVoter } from './services/filter-blog-items/blog-item-selected-by-topic.voter.';
import { BlogItemSelectedService } from './services/filter-blog-items/blog-item-selected.service';

const angularMaterialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule
];

@NgModule({
    declarations: [
        AppComponent,
        ...components,
        ...directives
    ],
    imports: [
        BrowserModule,
        LayoutModule,
        ...angularMaterialModules,
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        FlexLayoutModule,
        StoreModule.forRoot({'store': storeReducer}), // todo: migrate to angular 7
        StoreDevtoolsModule.instrument()
    ],
    providers: [
        {provide: BLOG_ITEM_SELECTED_VOTER, useClass: BlogItemSelectedByTitleVoter, multi: true},
        {provide: BLOG_ITEM_SELECTED_VOTER, useClass: BlogItemSelectedByTopicVoter, multi: true},
        BlogItemSelectedService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
