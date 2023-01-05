import { Component, TemplateRef } from "@angular/core";
import { PokemonService } from "../../Services/pokeapi-service/pokeapi-service";
import { PokemonData } from "../../Interfaces/pokemon";
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

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

    // Information for 'on click' dialog
    selectedPokemon: PokemonData;
    spriteURL: SafeUrl;
    loading = false;

    constructor(private pokemonService: PokemonService, private dialog: MatDialog, private sanitizer: DomSanitizer) {
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

    openPokemonDialog(poke: PokemonData, templateRef: TemplateRef<any>) {
        this.loading = true;

        console.log("Selected pokemon data: ");
        console.log(poke);
        // Get the pokemon sprite to display
        this.pokemonService.getSprite(poke.sprites.front_default).subscribe((sprite) => {

            // Create a url from the returned blob that can be displayed in html.
            this.spriteURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(sprite));
            this.selectedPokemon = poke;
            this.loading = false;
            this.dialog.open(templateRef);

            console.log("Sprite data recieved: ");
            console.log(sprite);
        });
    }
}
