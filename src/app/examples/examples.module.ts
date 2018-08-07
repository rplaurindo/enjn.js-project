import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as Components from './components';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        Components.HelloWorldComponent
    ],
    exports: [
        Components.HelloWorldComponent
    ]
})
export class Module { }
