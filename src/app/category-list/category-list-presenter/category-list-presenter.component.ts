import { Component, Input } from '@angular/core';
import { Category } from 'src/app/state/models';

@Component({
  selector: 'app-category-list-presenter',
  templateUrl: './category-list-presenter.component.html',
  styleUrls: ['./category-list-presenter.component.scss']
})
export class CategoryListPresenterComponent {
  @Input() categories: Category[] = [];
}
