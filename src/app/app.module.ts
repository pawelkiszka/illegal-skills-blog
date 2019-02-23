import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';
import { AppRoutingModule } from './app-routing.module';
import { CoreAppModule } from './core/core-app.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

export function hljsLanguages() {
    return [
        {name: 'typescript', func: typescript},
    ];
}

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
            languages: hljsLanguages
        }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
