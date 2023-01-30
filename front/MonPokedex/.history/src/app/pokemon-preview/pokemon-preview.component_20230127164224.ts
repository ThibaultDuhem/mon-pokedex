import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.scss']
})
export class PokemonPreviewComponent implements OnInit {
    name          !:  string;
    description   !:  string;
    region        !:  string;
    type          !:  string;
    img           !:  string;
    pokedexNumber !:  number;

    ngOnInit(){
      this.name='Bulbizarre';
      this.description='Bulbizarre (anglais : Bulbasaur ; japonais : フシギダネ Fushigidane) est un Pokémon de type Plante et Poison de la première génération. C\'est l\'un des Pokémon de départ de la région de Kanto. ';
      this.region='Kanto';
      this.type='Plante';
      this.img='https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png';
      this.pokedexNumber=1;
    }
}
