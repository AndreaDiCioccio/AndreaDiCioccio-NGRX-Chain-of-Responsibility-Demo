import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { EffectsModule } from '@ngrx/effects';
import { ItemsModule } from './ngrx/items/items.module';
import { RatingsModule } from './ngrx/ratings/ratings.module';

import { ConteinerComponent } from './conteiner.component';
import { ItemsGalleryComponent } from './components/items-gallery.component';
import { ItemCardComponent } from './components/item-card.component';
import { ShowItemRatingComponent } from './components/show-item-rating.component';
import { RateItemComponent } from './components/rate-item.component';


@NgModule({
  declarations: [
    ConteinerComponent,
    ItemsGalleryComponent,
    ItemCardComponent,
    ShowItemRatingComponent,
    RateItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({},{ runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    ItemsModule,
    RatingsModule
  ],
  providers: [],
  bootstrap: [ConteinerComponent]
})

export class AppModule { }
