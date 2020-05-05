import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, BubbleSortComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
