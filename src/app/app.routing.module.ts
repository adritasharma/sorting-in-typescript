import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';


export const routes: Routes = [
    { path: 'bubble-sort', component: BubbleSortComponent },
    { path: 'selection-sort', component: SelectionSortComponent },
    { path: 'insertion-sort', component: InsertionSortComponent },
    { path: 'merge-sort', component: MergeSortComponent },
];

@NgModule({
    exports: [RouterModule]
})

export class AppRoutingModule {
}