import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { addCategory, categoriesListLoaded, deleteCategory } from 'src/app/state/actions';
import { Category } from 'src/app/state/models';
import { categories } from 'src/app/state/selectors';

@Component({
  selector: 'app-category-list-container',
  template: `
  <app-category-list-presenter [categories]="categories$ | async"
                               (categoryAdded)="addCategory($event)"
                               (categoryDeleted)="deleteCategory($event)">
  </app-category-list-presenter>`,
  styleUrls: ['./category-list-container.component.scss']
})
export class CategoryListContainerComponent implements OnInit {
  categories$ = this.store.select(categories)

  constructor(
    private readonly store: Store,
  ) { }

  ngOnInit() {
    this.store.dispatch(categoriesListLoaded());
  }

  addCategory(category: Category) {
    this.store.dispatch(addCategory({payload: category})); // this is where magic happens
  }

  deleteCategory(categoryId: number) {
    this.store.dispatch(deleteCategory({payload: categoryId}));
  }

}
