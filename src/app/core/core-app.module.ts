import { NgModule } from '@angular/core';
import { SharedAppModule } from '../shared/shared-app.module';
import { coreComponents } from './components';
import { coreDirectives } from './directives';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ...coreComponents,
        ...coreDirectives
    ],
    imports: [
        SharedAppModule,
        RouterModule
    ],
    exports: [
        ...coreComponents,
        ...coreDirectives
    ]
})
export class CoreAppModule {
}
