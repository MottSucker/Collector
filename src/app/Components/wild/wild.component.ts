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

    constructor(private pokemonService: PokemonService, private dialog: MatDialog, private sanitizer: DomSanitizer) {
        console.log("Created wild component");
    }

    getRandomPokemon() {
        this.loadedPokemon = 0;
        this.pokemon = Array(this.numRolls);

        this.clicked = false;

        // We need seperate counters for the number of times to make the api call (i) and the current pokemon we are loading (this.loadedPokemon).
        // Without this, (i) will increment while logic is still being performed and all references to it will be updated before we want them to.
        const randomPokemonCall = new Promise<void>((resolve) => { 
            for (let i = 0; i < this.numRolls; i++) {
                // Make api call to get a random pokemon
                this.pokemonService.getRandomPokemon().subscribe((response) => {
                    response.name = response.name.charAt(0).toUpperCase() + response.name.slice(1);
                    this.pokemon[this.loadedPokemon] = response;
                    this.loadedPokemon++;
                    if (this.loadedPokemon == this.numRolls) {
                        // All pokemon have been loaded, so we can now load the sprites.
                        this.loadedPokemon = 0;
                        resolve();
                    }
                });
            }
        });

        randomPokemonCall.then(() => {

            for (let i = 0; i < this.pokemon.length; i++) {
                this.pokemonService.getSprite(this.pokemon[i].sprites.front_default).subscribe((sprite) => {

                    // Create a url from the returned blob that can be displayed in html.
                    this.pokemon[i].spriteURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(sprite));
                    
                    this.loadedPokemon++;
                    if (this.loadedPokemon == this.numRolls) {
                        // All sprites have been loaded, so we can finalize the cards.
                        console.log("All pokemon data loaded.");
                        this.clicked = true;
                    }
                });
            }
        })
        // Update all sprites
    }

    openPokemonDialog(poke: PokemonData, templateRef: TemplateRef<any>) {
        this.selectedPokemon = poke;
        this.spriteURL = poke.spriteURL;
        this.dialog.open(templateRef);
    }
}
