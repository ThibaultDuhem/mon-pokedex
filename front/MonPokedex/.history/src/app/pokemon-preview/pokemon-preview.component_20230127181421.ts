import { Component, OnInit, Input } from '@angular/core';
import { PokemonPreview } from '../models/pokemon-preview.model';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.scss']
})
export class PokemonPreviewComponent implements OnInit {
    @Input() PokemonPreview!:PokemonPreview;
    ngOnInit(){
    }
}
