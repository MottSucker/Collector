import { Component, Input, OnInit } from "@angular/core";
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

    constructor() {
    }

    ngOnInit() {
        console.log("Card data: ");
        console.log(this.pokemon);
        if (this.pokemon != null) {
            this.pokemonReceived = true;
        }
    }
}
