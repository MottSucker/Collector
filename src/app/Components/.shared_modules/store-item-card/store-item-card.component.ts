import { Component, Input, OnInit } from "@angular/core";
import { SafeUrl } from "@angular/platform-browser";
import { PokemonData } from "../../../Interfaces/pokemon"

@Component({
    selector: "profile-card",
    templateUrl: "./profile-card.component.html",
    styleUrls: ["./profile-card.component.css"],
})
export class StoreItemCardComponent implements OnInit {

    @Input() pokemon: PokemonData;
    validatedPokemonData: PokemonData;
    pokemonReceived: boolean = false;
    spriteURL: SafeUrl;

    constructor() {
    }

    ngOnInit() {
        if (this.pokemon != null) {
            this.spriteURL = this.pokemon.spriteURL;
            this.pokemonReceived = true;
            console.log("Set pokemon card safe url: " + this.spriteURL)
        }
    }
}
