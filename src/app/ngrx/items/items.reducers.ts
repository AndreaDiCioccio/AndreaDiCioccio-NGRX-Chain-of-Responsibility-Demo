import { createReducer, on, Action } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { Item } from '../../models';
import { selectItemId, ItemsState } from './models';
import * as itemsActions from './items.actions'

export const adapter = createEntityAdapter<Item>({
    sortComparer:selectItemId
})

export const initialItemsState = adapter.getInitialState()

export const itemsReducers = createReducer(
    initialItemsState,
    on(itemsActions.getAllItemsSuccess,  (state, action) => adapter.addAll(action.items, state)),
);

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: ItemsState | undefined, action: Action) {
    return itemsReducers(state, action)
}