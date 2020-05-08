import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing.module';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, BubbleSortComponent, SelectionSortComponent, InsertionSortComponent, MergeSortComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
