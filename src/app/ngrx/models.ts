import { ItemsState } from './items/models';
import { RatingsState } from './ratings/models';

export interface StoreState {
    items:ItemsState
    rating:RatingsState 
} 