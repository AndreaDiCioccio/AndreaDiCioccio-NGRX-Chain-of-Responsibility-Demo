import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ItemsState } from './models'
import * as itemsReducers from './items.reducers'

export const selectItemsState = createFeatureSelector<ItemsState>('items')
 
export const getAllItems = createSelector(
    selectItemsState,
    itemsReducers.selectAll
)