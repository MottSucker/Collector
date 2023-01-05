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

    totalPokemonCount: number;

    constructor(private http: HttpClient) {
        console.log("Creating pokemon service");
        this.http.get<any>(this.getPokemonLink).subscribe((response) => {
            this.totalPokemonCount = response.count;
        })
    }

    // Gets all menu items from the constants file
    getRandomPokemon(): Observable<PokemonData> {
        var randomId = Math.floor(Math.random() * (800 + 1));
        console.log("Sending http request to: " + this.getPokemonLink);
        return this.http.get<PokemonData>(this.getPokemonLink + "/" + randomId);
    }

    getSprite(url: string): Observable<Blob> {
        console.log("Retrieving image from: " + url);
        return this.http.get(url, { responseType: "blob" });
    }
}
