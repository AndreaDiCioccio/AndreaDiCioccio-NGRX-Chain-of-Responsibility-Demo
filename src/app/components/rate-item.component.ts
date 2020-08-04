import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rate-item',
  template: `
    <div *ngIf="!isRated; else rated">
        <a (click)="rate(1)"><img src="{{greyStar}}" title="click to rate!"></a>
        <a (click)="rate(2)"><img src="{{greyStar}}" title="click to rate!"></a>
        <a (click)="rate(3)"><img src="{{greyStar}}" title="click to rate!"></a>
        <a (click)="rate(4)"><img src="{{greyStar}}" title="click to rate!"></a>
        <a (click)="rate(5)"><img src="{{greyStar}}" title="click to rate!"></a>
        <p>rate!</p>
    </div>
    <ng-template #rated>
        <div class="ratingStarsDone" *ngFor="let star of ratingStars">
            <img src="{{star}}">
        </div>
        <p>rated!</p>
    </ng-template>
  `,
  styles: ['.ratingStarsDone{display:inline-block;}',
            'p{display:inline}']
})
export class RateItemComponent {

    @Output() newRating: EventEmitter<number> = new EventEmitter<number>();

    greyStar:string = 'https://raw.githubusercontent.com/AndreaDiCioccio/NGRX-Store-Demo5-Chain-of-Responsibility/master/src/assets/images/grey-star.jpg'
    yellowStar:string = 'https://raw.githubusercontent.com/AndreaDiCioccio/NGRX-Store-Demo5-Chain-of-Responsibility/master/src/assets/images/yellow-star.jpg'
    ratingStars:string[] = [null, null, null, null, null]

    isRated:boolean = false

    rate(rate:number):void{

        for(let j=0; j<5; j++){
            j < rate ? this.ratingStars[j] = this.yellowStar : this.ratingStars[j] = this.greyStar
        }

        this.isRated = true
         
        setTimeout(() => {
            this.isRated = false
            //l'emit l'ho dovuto mettere qui perchè mi bloccava il rendering delle stellette
            this.newRating.emit(rate)
        }, 2000)

    }

}
