import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import * as itemsReducers from './items.reducers'
import { ItemsEffects } from './items.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
      StoreModule.forFeature('items', itemsReducers.reducer),
      EffectsModule.forFeature([ItemsEffects])
    ],
})
  
export class ItemsModule {}