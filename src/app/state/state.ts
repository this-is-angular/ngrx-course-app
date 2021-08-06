import { Category } from './models';

export interface CategoryState {
  list: Category[];
}

export interface AppState {
  categories: CategoryState;
}

export const initialState: CategoryState = {
  list: [],
};
