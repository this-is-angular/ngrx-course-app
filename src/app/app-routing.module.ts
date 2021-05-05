import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListContainerComponent } from './category-list/category-list-container/category-list-container.component';


const routes: Routes = [
  { path: 'categories', component: CategoryListContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
