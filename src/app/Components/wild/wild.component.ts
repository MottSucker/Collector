import { Component, TemplateRef } from "@angular/core";
import { PokemonService } from "../../Services/pokeapi-service/pokeapi-service";
import { PokemonData } from "../../Interfaces/pokemon";
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Subscription } from "rxjs";

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

        for (let i = 0; i < this.numRolls; i++) {
            this.rollSinglePokemon();
        }
    }

    openPokemonDialog(poke: PokemonData, templateRef: TemplateRef<any>) {
        this.selectedPokemon = poke;
        this.spriteURL = poke.spriteURL;
        this.dialog.open(templateRef);
    }

    rollSinglePokemon(): Subscription {
        // Make api call to get a random pokemon
        return this.pokemonService.getRandomPokemon().subscribe((response) => {

            // Check base stats
            var total = this.getBaseStatTotal(response);
            console.log("Rolled " + response.name + ". Odds for success are " + ((200.0/total)*100));
            var randomId = Math.floor(Math.random() * (total));
            console.log("Number rolled is " + randomId + " out of " + (total));

            if (randomId < 200) {
                console.log("SUCCESS!!!");
                response.name = response.name.charAt(0).toUpperCase() + response.name.slice(1);
                this.pokemon[this.loadedPokemon] = response;
                this.loadedPokemon++;
                if (this.loadedPokemon == this.numRolls) {
                    this.loadSprites();
                }
                return true;
            } else {
                console.log("Pokemon ran away....");
                return this.rollSinglePokemon();
            }
        });
    }

    loadSprites() {
        this.loadedPokemon = 0;
        console.log("Loading sprites");
        for (let i = 0; i < this.pokemon.length; i++) {
            this.pokemonService.getSprite(this.pokemon[i].sprites.front_default).subscribe((sprite) => {

                // Create a url from the returned blob that can be displayed in html.
                this.pokemon[i].spriteURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(sprite));

                this.loadedPokemon++;
                if (this.loadedPokemon == this.numRolls) {

                    this.clicked = true;
                }
            });
        }
    }

    getBaseStatTotal(pokemonData: PokemonData): number {
        var total: number = 0;
        for (let i = 0; i < 6; i++) {
            total += pokemonData.stats[i].base_stat;
        }
        return total;
    }
}
