import { EntityState } from '@ngrx/entity';
import { Item } from '../../models';
/* 
export function compareItems(i1:Item, i2:Item){
    
    const compare = i1.id - i2.id;

    if (compare > 0) {
        return 1;
    }else if ( compare < 0) {
        return -1;
    }else return 0;

}
 */

 export function selectItemId(i:Item):number{
     return i.id
 }
export interface ItemsState extends EntityState<Item>{}
