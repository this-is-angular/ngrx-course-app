import { Action, createReducer, on } from '@ngrx/store';
import { addCategory, loadCategoriesSuccess } from './actions';

import { CategoryState, initialState } from './state';

const _reducer = createReducer(
  initialState,
  on(addCategory, (state, action) => ({...state, categories: [...state.list, action.payload]})),
  on(loadCategoriesSuccess, (state, action) => ({...state, list: action.payload})),
);

export function categoryReducer(state: CategoryState, action: Action) {
  return _reducer(state, action);
}
