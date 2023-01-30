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
      this.name='pokemonName';
      this.description='pokemonDescription';
      this.region='pokemonRegion';
      this.type='pokemonType';
      this.img='pokemonImgSrc';
      this.pokedexNumber=0;
    }
}
