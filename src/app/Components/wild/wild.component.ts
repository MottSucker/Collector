import { Component } from "@angular/core";
import { PokemonService } from "../../Services/pokeapi-service/pokeapi-service";
import { PokemonData } from "../../Interfaces/pokemon"

@Component({
    selector: "app-wild",
    templateUrl: "./wild.component.html",
    styleUrls: ["./wild.component.css"],
})
export class WildComponent {

    data: any;
    pokemon: PokemonData[] = Array(10);
    numRolls: number[] = Array(10);
    clicked: boolean = false;

    constructor(private pokemonService: PokemonService) {
        console.log("Created wild component");
    }

    getRandomPokemon() {
        for (var i = 0; i < this.pokemon.length; i++) {
            console.log("Getting random pokemon...");
            this.pokemonService.getRandomPokemon().subscribe((response) => {
                this.pokemon[i] = response;
                console.log("Recieved random pokemon: ");
                console.log(this.pokemon);
                if (i == this.pokemon.length - 1) {
                    this.clicked = true;
                }
            });
        }
        
    }
}
