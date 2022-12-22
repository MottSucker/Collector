import { Component, Input } from "@angular/core";
import { PokemonData } from "../../../Interfaces/pokemon"

@Component({
    selector: "pokemon-card",
    templateUrl: "./pokemon-card.component.html",
    styleUrls: ["./pokemon-card.component.css"],
})
export class PokemonCardComponent {

    @Input() pokemon: PokemonData;
    validatedPokemonData: PokemonData;

    constructor() {
        console.log("Card data: ");
        console.log(this.pokemon);
    }

    pokemonRecieved(): boolean {
        return (typeof this.pokemon != 'undefined');
    }
}
