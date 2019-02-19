import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';
import { AppRoutingModule } from './app-routing.module';
import { CoreAppModule } from './core/core-app.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CoreAppModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HighlightModule.forRoot({
            languages: () => [{name: 'typescript', func: typescript}]
        }),
        StoreDevtoolsModule.instrument(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
