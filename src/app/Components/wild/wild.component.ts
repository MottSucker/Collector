import { Component } from "@angular/core";
import { PokemonService } from "../../Services/pokeapi-service/pokeapi-service";
import { PokemonData } from "../../Services/service-exports"

@Component({
    selector: "app-wild",
    templateUrl: "./wild.component.html",
    styleUrls: ["./wild.component.css"],
})
export class WildComponent {

    data: any;
    pokemon: PokemonData;

    constructor(private pokemonService: PokemonService) {
        console.log("Created wild component");
    }

    getRandomPokemon() {
        console.log("Getting random pokemon...");
        this.pokemonService.getRandomPokemon().subscribe((response) => {
            this.pokemon = response;
            console.log("Recieved random pokemon: ");
            console.log(this.pokemon);
        });
    }
}
