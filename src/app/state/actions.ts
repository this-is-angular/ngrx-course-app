import { createAction, props } from '@ngrx/store';
import { Category } from './models';

export const addCategory = createAction('[Category List] Add Category', props<{payload: {name: string}}>());
export const deleteCategory = createAction('[Category List] Delete Category', props<{payload: number}>());

export const addCategorySuccess = createAction('[Category List] Add Category Success', props<{payload: Category}>());

export const addCategoryError = createAction('[Category List] Add Category Error');

export const categoriesListLoaded = createAction('[Category List] Categories List Loaded');
export const loadCategoriesSuccess = createAction('[Category List] Load Categories Success', props<{payload: Category[]}>());
export const loadCategoriesError = createAction('[Category List] Load Categories Error');

export const deleteCategorySuccess = createAction('[Category List] Delete Category Success', props<{payload: number}>());
export const deleteCategoryError = createAction('[Category List] Delete Category Error');
