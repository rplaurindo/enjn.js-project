import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// added
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';

import { Examples } from './examples';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    Examples.Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
