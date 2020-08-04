import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Item } from '../../../app/models';
import { MockService } from '../../mock.service';
import * as itemsActions from './items.actions'
import { Observable, pipe } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators'

@Injectable()
export class ItemsEffects {

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getAllItems$:Observable<any> = createEffect(() => 
        this.actions$.pipe(
            ofType(itemsActions.getAllItems.type),
            mergeMap( () => this.mockService.getAllItems()),
            map( (items:Item[]) => itemsActions.getAllItemsSuccess({items}))
        )
    )

}