import { NgModule } from '@angular/core';
import { SharedAppModule } from '../shared/shared-app.module';
import { coreComponents } from './components';
import { coreDirectives } from './directives';

@NgModule({
    declarations: [
        ...coreComponents,
        ...coreDirectives
    ],
    imports: [
        SharedAppModule
    ],
    exports: [
        ...coreComponents,
        ...coreDirectives
    ]
})
export class CoreAppModule {
}
