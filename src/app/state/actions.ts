import { createAction, props } from '@ngrx/store';

export const addCategory = createAction('[Category List] Add Category', props<{payload: {name: string}}>());
