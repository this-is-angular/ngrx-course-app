import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../state/models';

@Injectable({providedIn: 'root'})
export class CategoryService {

  readonly baseUrl = 'http://localhost:3000/categories';

  constructor(
    private readonly http: HttpClient,
  ) {}

  getCategories() {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getCategoryById(id: number) {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }

  addCategory(category: Category) {
    return this.http.post<Category>(this.baseUrl, category);
  }

  deleteCategory(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
