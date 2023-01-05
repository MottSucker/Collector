import { Component } from "@angular/core";
import { PokemonService } from "../../Services/pokeapi-service/pokeapi-service";
import { PokemonData } from "../../Interfaces/pokemon"

@Component({
    selector: "app-wild",
    templateUrl: "./wild.component.html",
    styleUrls: ["./wild.component.css"],
})
export class WildComponent {

    private numRolls: number = 3;
    private loadedPokemon: number = 0;

    data: any;
    pokemon: PokemonData[] = Array(this.numRolls);
    clicked: boolean = false;

    constructor(private pokemonService: PokemonService) {
        console.log("Created wild component");
    }

    getRandomPokemon() {
        this.loadedPokemon = 0;
        this.pokemon = Array(this.numRolls);

        // We need seperate counters for the number of times to make the api call (i) and the current pokemon we are loading (this.loadedPokemon).
        // Without this, (i) will increment while logic is still being performed and all references to it will be updated before we want them to.
        for (var i = 0; i < this.numRolls; i++) {
            // Make api call to get a random pokemon
            this.pokemonService.getRandomPokemon().subscribe((response) => {
                this.pokemon[this.loadedPokemon] = response;
                this.loadedPokemon++
                if (this.loadedPokemon == this.numRolls) {
                    // All pokemon have been loaded, so we can create their cards.
                    this.clicked = true;
                }
            });
        }
        
    }
}
