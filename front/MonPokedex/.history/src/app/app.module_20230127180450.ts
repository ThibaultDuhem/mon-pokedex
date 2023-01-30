import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonPreviewComponent } from './pokemon-preview/pokemon-preview.component';
import { MatSlideToggleModule } from '@angular/material/mat-card';


@NgModule({
  declarations: [
    AppComponent,
    PokemonPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
