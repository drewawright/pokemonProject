import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const ApiUrl = 'https://pokeapi.co/api/v2'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { }

  getPokemonList() {
    return this._http.get(`${ApiUrl}/pokemon-form?offset=0&limit=9`);
  }

  getPokemon(id: string) {
    return this._http.get(`${ApiUrl}/pokemon-form/${id}`);
  }
}
