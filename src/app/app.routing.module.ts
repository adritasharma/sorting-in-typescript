import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';


export const routes: Routes = [
    { path: 'bubble-sort', component: BubbleSortComponent },
    { path: 'selection-sort', component: SelectionSortComponent },
];

@NgModule({
    exports: [RouterModule]
})

export class AppRoutingModule {
}