import { Rating } from './../../models';
import { createAction, props } from '@ngrx/store';

export const getAllRatings = createAction(
    '[Conteiner] Get All Ratings'
)

export const getAllRatingsSuccess = createAction(
    '[Ratings Effects] Get All Ratings Success',
    props<{ratings:Rating[]}>()
)

export const insertNewRating = createAction(
    '[Conteiner] Insert New Rating',
    props<{newRating:Rating}>()
)

export const insertNewRatingSuccess = createAction(
    '[Ratings Effects] Insert New Rating Success',
    props<{newRating:Rating}>()
)