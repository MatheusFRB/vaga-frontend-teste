import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon/pokemon.model';
import { app_api } from './../app.api';
import { Observable} from 'rxjs/Observable'
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class PokemonsService {


    constructor(private http:Http){}

    pokemons(): Observable<Pokemon[]>{
        return this.http.get(`${app_api}/pokemons`)
        .map(response => response.json())

    }
    
}