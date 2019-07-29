import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon-service';
import { Pokemon } from 'src/app/models/pokemon';
import { Observable } from 'rxjs';
import { SearchResult } from 'src/app/models/searchResult';

@Component({
  selector: 'app-pokemon-index',
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.css']
})
export class PokemonIndexComponent implements OnInit {

  pokemonList: SearchResult;
  pokemon: Pokemon;

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this._pokemonService.getPokemonList().subscribe((res : SearchResult) => this.pokemonList = res);
  }

}
