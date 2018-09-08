import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Http, HttpModule} from '@angular/http'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',

})
export class PokemonsComponent implements OnInit {

  pokemon="Charmander"

  constructor() { }

  ngOnInit() {
  }

}
