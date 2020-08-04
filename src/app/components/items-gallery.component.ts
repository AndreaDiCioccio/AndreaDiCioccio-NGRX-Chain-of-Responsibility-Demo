import { Observable } from 'rxjs';
import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Item, Rating } from '../models';

@Component({
    selector: 'app-items-gallery',
    template: `
        <h2>Items Gallery</h2>
        <div class="gallery">
            <app-item-card *ngFor="let item of items$ | async" 
                [item]=item 
                (newRating)='onNewRating($event)'>
            </app-item-card>
        </div>

    `,
    styles: ['.gallery { display: flex; justify-content:space-around; flex-wrap:wrap}']
})

export class ItemsGalleryComponent {

    @Input() items$:Observable<Item[]>
    @Output() newRating:EventEmitter<Rating> = new EventEmitter<Rating>()

    
    onNewRating(newRating:Rating):void{

        this.newRating.emit(newRating)

    }

}
