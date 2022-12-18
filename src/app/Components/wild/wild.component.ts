import { Component } from "@angular/core";
import { PokemonService } from "../../Services/pokeapi-service/pokeapi-service";

@Component({
    selector: "app-wild",
    templateUrl: "./wild.component.html",
    styleUrls: ["./wild.component.css"],
})
export class WildComponent {
    constructor(private pokemonService: PokemonService) {
        console.log("Created wild component");
    }

    public getRandomPokemon(): void {
        console.log("Getting random pokemon...");
        this.pokemonService.getRandomPokemon();
    }
}
