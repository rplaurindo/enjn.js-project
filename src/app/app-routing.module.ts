import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Examples } from './examples';

const appRoutes: Routes = [
    {
        path: 'examples',
        children: [
            {
                path: 'hello-world',
                component: Examples.Components.HelloWorldComponent
            }
        ]
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
