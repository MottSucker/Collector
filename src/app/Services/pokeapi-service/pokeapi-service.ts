import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { PokemonData } from "../../Interfaces/pokemon";

@Injectable({
    providedIn: "root",
})
export class PokemonService {
    private pokeAPILink = "https://pokeapi.co/api/v2/";
    private getPokemonLink = this.pokeAPILink + "pokemon";
    private getEvolutionsLink = this.pokeAPILink + "evolution-chain/";

    totalPokemonCount: number = 905;
    totalExtraCount: number = 249;

    constructor(private http: HttpClient) {
        console.log("Creating pokemon service");
    }

    // Gets all menu items from the constants file
    getRandomPokemon(): Observable<PokemonData> {
        var specialChance = Math.floor(Math.random() * (10));
        if (specialChance == 1) {
            //Special pool
            console.log("ROLLING SPECIAL POOL!!!!");
            var randomId = Math.floor(Math.random() * (this.totalExtraCount)) + 1;
            randomId += 10000;
            return this.http.get<PokemonData>(this.getPokemonLink + "/" + randomId);
        } else {
            //Regular pool
            var randomId = Math.floor(Math.random() * (this.totalPokemonCount)) + 1;
            return this.http.get<PokemonData>(this.getPokemonLink + "/" + randomId);

        }
        
    }

    getSprite(url: string): Observable<Blob> {
        console.log("Retrieving image from: " + url);
        return this.http.get(url, { responseType: "blob" });
    }
}
