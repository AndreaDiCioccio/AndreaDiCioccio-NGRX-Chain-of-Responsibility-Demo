import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Item, Rating } from '../../../app/models';
import { MockService } from '../../mock.service';
import * as ratingsActions from './ratings.actions'
import { Observable, pipe } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators'

@Injectable()
export class RatingsEffects {

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getAllItems$:Observable<any> = createEffect(() => 
        this.actions$.pipe(
            ofType(ratingsActions.getAllRatings.type),
            mergeMap( () => this.mockService.getAllRatings()),
            map( (ratings:Rating[]) => ratingsActions.getAllRatingsSuccess({ratings}))
        )
    )

    insertNewRating$:Observable<any> = createEffect( () =>
        this.actions$.pipe(
            ofType(ratingsActions.insertNewRating.type),
            mergeMap( (action) => this.mockService.insertNewRating(action['newRating'] )),
            map( newRating => ratingsActions.insertNewRatingSuccess({newRating})),
        )
    )

}