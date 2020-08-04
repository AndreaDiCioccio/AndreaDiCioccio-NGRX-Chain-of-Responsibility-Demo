import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Rating } from '../models';

@Component({
    selector: 'app-show-item-rating',
    template:`
        <p>rating:<b>{{rating | number:'1.0-1'}}</b> ({{ratingCount}})</p>
    `,
    styles:['p{color:blue; margin:5px;}']
})

export class ShowItemRatingComponent{

    @Input() rating:number
    @Input() ratingCount:number

}
