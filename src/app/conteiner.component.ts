import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { Item, Rating } from './models';
import * as itemsActions from './ngrx/items/items.actions'
import * as itemSelectors from './ngrx/items/items.selectors'
import * as ratingsActions from './ngrx/ratings/ratings.actions'
import * as ratingsSelectors from './ngrx/ratings/ratings.selectors'
import { Store, select } from '@ngrx/store';
import { StoreState } from './ngrx/models';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    template: `
        <h1>NGRX chain of responsability Demo</h1>
        <app-items-gallery 
            [items$]=itemsAndRatings$ 
            (newRating)='onNewRating($event)'>
        </app-items-gallery>
    `
})

export class ConteinerComponent implements OnInit, OnDestroy{

    items$:Observable<Item[]>
    ratings$:Observable<Rating[]>
    itemsAndRatings$:Observable<Item[]>
    
    itemsAndRatings:Item[]

    subsItemsAndRatings:Subscription

    constructor(private store:Store<StoreState>){}

    ngOnInit():void {

        this.store.dispatch(itemsActions.getAllItems())
        this.store.dispatch(ratingsActions.getAllRatings())

        this.items$ = this.store.pipe( select(itemSelectors.getAllItems))
        this.ratings$ = this.store.pipe( select(ratingsSelectors.getAllRatings))

        this.addRatingToItems()
        
    }

    ngOnDestroy(): void {
        if(this.subsItemsAndRatings)
            this.subsItemsAndRatings.unsubscribe
    }

    onNewRating(newRating:Rating):void{
        this.store.dispatch(ratingsActions.insertNewRating({newRating}))
    }    

    //unifies the rating values in an array of Item objects
    addRatingToItems():void{

        this.itemsAndRatings$ = combineLatest([this.items$, this.ratings$])
            .pipe(
                map( ([items, ratings]) => {

                    return this.sumRatings(items, ratings)
                    
                }),
                map( (items:Item[]) => items.map( (item:Item) => ({...item, rating:item.rating / item.ratingCount})))
            )

        this.subsItemsAndRatings = this.itemsAndRatings$.subscribe()

    }

    // adds up the ratings, creates and returns Item objects array
    sumRatings(items:Item[], ratings:Rating[]):Item[]{

        let itemsRating:Item[] = []
        let index:number = 0

        items.map( item => {
        
            let count:number = 0        // count rates for every item
            let totalRate:number = 0    //sum of rates of a item
            itemsRating.push(null)

            ratings.map( rating => {
                if(item.id == rating.itemId){
                    count++
                    totalRate += rating.rating
                    itemsRating[index] = {...item, rating:totalRate, ratingCount:count}
                }
            })

            index++
        
        })

        return itemsRating

    }

}
