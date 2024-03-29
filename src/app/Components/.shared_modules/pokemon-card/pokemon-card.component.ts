import { Component, Input, OnInit } from "@angular/core";
import { SafeUrl } from "@angular/platform-browser";
import { PokemonData } from "../../../Interfaces/pokemon"

@Component({
    selector: "pokemon-card",
    templateUrl: "./pokemon-card.component.html",
    styleUrls: ["./pokemon-card.component.css"],
})
export class PokemonCardComponent implements OnInit {

    @Input() pokemon: PokemonData;
    validatedPokemonData: PokemonData;
    pokemonReceived: boolean = false;
    spriteURL: SafeUrl;
    stars: number[];
    staryuImg: string = "assets/staryu.png";

    constructor() {
    }

    ngOnInit() {
        if (this.pokemon != null) {
            this.spriteURL = this.pokemon.spriteURL;
            this.pokemonReceived = true;
            this.stars = Array(this.pokemon.ranking);
            console.log("Set pokemon card safe url: " + this.spriteURL)
        }
    }
}
