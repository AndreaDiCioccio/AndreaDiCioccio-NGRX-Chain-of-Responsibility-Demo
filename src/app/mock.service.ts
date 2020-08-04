import { Injectable } from '@angular/core';
import { items, ratings } from './mockdata';
import { of, Observable, from } from 'rxjs';
import { Item, Rating } from './models';

@Injectable({providedIn: 'root'})
export class MockService {

    getAllItems():Observable<Item[]>{
        return of(items)
    }

    getAllRatings():Observable<Rating[]>{
        return of([...ratings])
        //return of(ratings)
    }

    insertNewRating(newRating:Rating):Observable<Rating>{
        let max:number = Math.max.apply(Math, ratings.map( rating => rating.id))
        let newId:number = max + 1
        let newRatingFull:Rating = {...newRating, id:newId}
        
        ratings.push(newRatingFull)
        
        return from([newRatingFull])
    }

}