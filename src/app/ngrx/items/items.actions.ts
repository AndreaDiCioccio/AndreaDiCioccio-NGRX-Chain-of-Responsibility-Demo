import { createAction, props } from '@ngrx/store';
import { Item } from '../../../app/models';

export const getAllItems = createAction(
    '[Conteiner] Get All Items'
)

export const getAllItemsSuccess = createAction(
    '[Items Effects] Get All Items Success',
    props<{items:Item[]}>()
)