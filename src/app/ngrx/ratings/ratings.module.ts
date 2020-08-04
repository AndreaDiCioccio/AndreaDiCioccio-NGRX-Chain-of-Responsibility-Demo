import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import * as ratingsReducers from './ratings.reducers'
import { RatingsEffects } from './ratings.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
      StoreModule.forFeature('ratings', ratingsReducers.ratingsReducers),
      EffectsModule.forFeature([RatingsEffects])
    ],
})
  
export class RatingsModule {}