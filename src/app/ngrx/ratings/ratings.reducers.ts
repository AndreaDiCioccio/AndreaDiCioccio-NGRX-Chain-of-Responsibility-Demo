import { createReducer, on, State, Action } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Rating } from '../../models';
import { selectRatingId, RatingsState } from './models';
import * as ratingsActions from './ratings.actions'
import { StoreState } from '../models';

export const adapter = createEntityAdapter<Rating>({
    sortComparer:selectRatingId
})

export const initialRatingsState = adapter.getInitialState()

export const ratingsReducers = createReducer(
    initialRatingsState,
    on(ratingsActions.getAllRatingsSuccess,  (state, action) => adapter.addAll(action.ratings, state)),
    on(ratingsActions.insertNewRatingSuccess, (state, {newRating}) => adapter.addOne(newRating, state))
);

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: RatingsState | undefined, action: Action) {
    return ratingsReducers(state, action)
}