import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';

import { CategoryService } from '../services/category.service';
import { categoriesListLoaded, loadCategoriesSuccess, loadCategoriesError, deleteCategory, deleteCategorySuccess, addCategory, addCategorySuccess, addCategoryError } from './actions';

@Injectable()
export class CategoriesEffects {

  categoriesListLoaded$ = createEffect(() => this.actions$.pipe(
    ofType(categoriesListLoaded),
    mergeMap(() => this.categoriesService.getCategories().pipe(
      map(categories => loadCategoriesSuccess({payload: categories})),
      catchError(() => of(loadCategoriesError())),
    ))
  ));

  // deleteCategory$ = createEffect(() => this.actions$.pipe(
  //   ofType(deleteCategory),
  //   mergeMap(({payload}) => this.categoriesService.deleteCategory(payload).pipe(
  //     map(() => deleteCategorySuccess({payload})),
  //     catchError(() => of(loadCategoriesError())),
  //   ))
  // ));

  addCategory$ = createEffect(() => this.actions$.pipe(
    ofType(addCategory),
    mergeMap(({payload}) => this.categoriesService.addCategory(payload).pipe(
      map((result) => addCategorySuccess({payload: {data: result, message: 'Category successfully added'}})),
      catchError(() => of(addCategoryError())),
    )),
  ));

  handleSuccessMessage$ = createEffect(() => this.actions$.pipe(
    ofType(addCategorySuccess, deleteCategorySuccess),
    tap(({payload}) => this.snackBar.open(payload.message, 'Dismiss', {duration: 2000})),
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly categoriesService: CategoryService,
    private readonly snackBar: MatSnackBar,
  ) { }

}
