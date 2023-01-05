export interface PokemonData {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
        front_shiny: string;
        front_female: string;
        front_female_shiny: string;
    }[];
    gender?: string;
}
