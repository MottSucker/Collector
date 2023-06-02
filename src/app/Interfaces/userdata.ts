import { SafeUrl } from "@angular/platform-browser";
import { PokemonData } from "./pokemon";

export interface UserData {
    username: number;
    pokemon: PokemonData[];
}
