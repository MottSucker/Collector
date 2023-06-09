import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DomSanitizer } from "@angular/platform-browser";
import { UserData } from "../../Interfaces/userdata";
import { FileService } from "../../Services/file-service/file-service.service";
import { PokemonService } from "../../Services/pokeapi-service/pokeapi-service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {

    userData: UserData;
    loading = true;

    constructor(private pokemonService: PokemonService, private fileService: FileService, private dialog: MatDialog, private sanitizer: DomSanitizer) {
        console.log("Created wild component");

        this.fileService.loadUserData().then((user) => {
            this.userData = user;
            this.loadSprites();
        })
    }

    // Load the sprites separately 
    loadSprites() {
        var loadedPokemon = 0;
        console.log("Loading sprites");
        for (let i = 0; i < this.userData.pokemon.length; i++) {
            this.pokemonService.getSprite(this.userData.pokemon[i].sprites.other['official-artwork'].front_default).subscribe((sprite) => {

                // Create a url from the returned blob that can be displayed in html.
                this.userData.pokemon[i].spriteURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(sprite));

                loadedPokemon++;
                if (loadedPokemon == this.userData.pokemon.length) {

                    this.loading = false;
                }
            });
        }
    }

}
