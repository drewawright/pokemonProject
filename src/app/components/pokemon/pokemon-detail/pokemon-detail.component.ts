import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../../services/pokemon-service';
import { PokemonDetail } from '../../../models/pokemonDetail';
import { single } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail: PokemonDetail;

  constructor(private _activatedRoute: ActivatedRoute, private _pokemonService: PokemonService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._pokemonService.getPokemon(routeData.get('id'))
      .subscribe((singlePokemon: PokemonDetail) => { 
        this.pokemonDetail = singlePokemon
      });
    })
  }

}
