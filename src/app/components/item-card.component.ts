import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item, Rating } from '../models';

@Component({
    selector: 'app-item-card',
    template: `
    <div class="card">
        <div class="object-info">
            <div>{{item.name }}</div>
            <div>{{item.price | currency:'EUR'}}</div>
        </div>
        <app-show-item-rating 
            [rating]=item.rating 
            [ratingCount]=item.ratingCount>
        </app-show-item-rating>
        <app-rate-item (newRating)='onNewRating($event)'></app-rate-item>
    </div>
    `,
    styles: ['.object-info { width:300px; border:1px solid black; margin:5px; background-color:lightgrey }',
            '.card {border:2px solid black; margin:10px;}']
})

export class ItemCardComponent {

    @Input() item:Item
    @Output() newRating: EventEmitter<Rating> = new EventEmitter<Rating>();
    
    onNewRating(newRating:number):void{
        this.newRating.emit({id:null, itemId:this.item.id, rating:newRating})
    }

}
