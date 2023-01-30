import { Component,OnInit } from '@angular/core';
import { PokemonPreview } from './models/pokemon-preview.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Bulbizarre!: PokemonPreview;
  Carapuce !: PokemonPreview;
  Salameche !: PokemonPreview;
  ngOnInit(): void {
      this.Bulbizarre = new PokemonPreview('Bulbizarre',
      'Bulbizarre (anglais : Bulbasaur ; japonais : フシギダネ Fushigidane) \
      est un Pokémon de type Plante et Poison de la première génération. C\'est l\'un des Pokémon de de départ de la région de Kanto.',
      'Kanto',
      'Plante et Poison',
      'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png',
      1);
      this.Salameche = new PokemonPreview('Salameche',
      'Salamèche (anglais: Charmander ; japonais: ヒトカゲ Hitokage) est un Pokémon de type Feu de la première génération.\
       C\'est l\'un des Pokémon de départ de la région de Kanto. ',
      'Kanto',
      'Feu',
      'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png',
      4);
      this.Carapuce = new PokemonPreview('Carapuce',
      'Carapuce (anglais : Squirtle ; japonais : ゼニガメ Zenigame) est un Pokémon de type Eau de la première génération.\
       C\'est l\'un des Pokémon de départ de la région de Kanto',
      'Kanto',
      'Eau',
      'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/250px-Carapuce-RFVF.png',
      7);
  }

}
