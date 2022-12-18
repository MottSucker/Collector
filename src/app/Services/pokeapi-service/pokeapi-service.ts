import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PokemonData } from "../service-exports";

@Injectable({
    providedIn: "root",
})
export class PokemonService {
    private pokeAPILink = "https://pokeapi.co/api/v2/";
    private getPokemonLink = this.pokeAPILink + "pokemon";
    private getEvolutionsLink = this.pokeAPILink + "evolution-chain/";

    constructor() {
        console.log("Creating pokemon service");
    }

    // Gets all menu items from the constants file
    getRandomPokemon(): void {
        console.log("Sending http request to: " + this.getPokemonLink);
    }
}
