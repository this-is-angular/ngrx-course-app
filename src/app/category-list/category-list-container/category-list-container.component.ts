import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { categories } from 'src/app/state/selectors';

@Component({
  selector: 'app-category-list-container',
  template: `<app-category-list-presenter [categories]="categories$ | async"></app-category-list-presenter>`,
  styleUrls: ['./category-list-container.component.scss']
})
export class CategoryListContainerComponent implements OnInit {
  categories$ = this.store.select(categories)

  constructor(
    private readonly store: Store,
  ) { }

  ngOnInit() {
  }

}
