import { createFeatureSelector, createSelector } from '@ngrx/store'
import { RatingsState } from './models'
import * as ratingsReducers from './ratings.reducers'

export const selectRatingsState = createFeatureSelector<RatingsState>('ratings')
 
export const getAllRatings = createSelector(
    selectRatingsState,
    ratingsReducers.selectAll
)