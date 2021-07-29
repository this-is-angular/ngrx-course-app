import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { CategoryService } from '../services/category.service';
import { categoriesListLoaded, loadCategoriesSuccess, loadCategoriesError, deleteCategory, deleteCategorySuccess, addCategory, addCategorySuccess, addCategoryError } from './actions';

export class CategoriesEffects {

  categoriesListLoaded$ = createEffect(() => this.actions$.pipe(
    ofType(categoriesListLoaded),
    mergeMap(() => this.categoriesService.getCategories().pipe(
      map(categories => loadCategoriesSuccess({payload: categories})),
      catchError(() => of(loadCategoriesError())),
    ))
  ));

  deleteCategory$ = createEffect(() => this.actions$.pipe(
    ofType(deleteCategory),
    mergeMap(({payload}) => this.categoriesService.deleteCategory(payload).pipe(
      map(() => deleteCategorySuccess({payload})),
      catchError(() => of(loadCategoriesError())),
    ))
  ));

  addCategory$ = createEffect(() => this.actions$.pipe(
    ofType(addCategory),
    mergeMap(({payload}) => this.categoriesService.addCategory(payload).pipe(
      map((result) => addCategorySuccess({payload: result})),
      catchError(() => of(addCategoryError())),
    )),
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly categoriesService: CategoryService,
  ) { }

}
