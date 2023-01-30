import { Component,OnInit } from '@angular/core';
import { PokemonPreview } from './models/pokemon-preview.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Bulbizarre!: PokemonPreview;
  ngOnInit(): void {
      this.Bulbizarre = new PokemonPreview('Bulbizarre',
      'Bulbizarre (anglais : Bulbasaur ; japonais : フシギダネ Fushigidane) est un Pokémon de type Plante et Poison de la première génération. C\'est l\'un des Pokémon de d,
      'Kanto',
      'Plante',
      'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png',
      1);
  }}

}
