import { SafeUrl } from "@angular/platform-browser";
import { PokemonData } from "./pokemon";

export interface UserData {
    username: string;
    pokemon: PokemonData[];
}
