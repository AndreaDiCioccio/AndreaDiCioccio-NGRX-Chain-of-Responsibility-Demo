import { Rating } from './../../models';
import { EntityState } from '@ngrx/entity';
/* 
export function compareRatings(r1:Rating, r2:Rating){
    
    const compare = r1.itemId - r2.itemId;

    if (compare > 0) {
        return 1;
    }else if ( compare < 0) {
        return -1;
    }else return 0;

}
 */
export function selectRatingId(r:Rating):number{
    return r.id
}

export interface RatingsState extends EntityState<Rating>{}