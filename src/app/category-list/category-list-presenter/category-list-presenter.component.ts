import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/state/models';

@Component({
  selector: 'app-category-list-presenter',
  templateUrl: './category-list-presenter.component.html',
  styleUrls: ['./category-list-presenter.component.scss']
})
export class CategoryListPresenterComponent {
  @Input() categories: Category[] = [];
  @Output() categoryAdded = new EventEmitter<Category>();
  @Output() categoryDeleted = new EventEmitter<string>();
  newCategoryName = '';

  addCategory() {
    this.categoryAdded.emit({name: this.newCategoryName});
  }

  deleteCategory(categoryName: string) {
    this.categoryDeleted.emit(categoryName);
  }
}
