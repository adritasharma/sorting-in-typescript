import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';



export const routes: Routes = [
    { path: 'bubble-sort', component: BubbleSortComponent },
];

@NgModule({
    exports: [RouterModule]
})

export class AppRoutingModule {
}