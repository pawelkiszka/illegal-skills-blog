import { NgModule } from '@angular/core';
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
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

const angularMaterialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    exports: [
        ...angularMaterialModules,
        LayoutModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        HighlightModule
    ]
})
export class SharedAppModule {
}
