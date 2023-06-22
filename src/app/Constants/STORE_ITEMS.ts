import { StoreItemData } from "../Interfaces/store";

export const POKEBALLS: StoreItemData[] = [
    {
        name: "Rocks",
        description: "Throwing rocks at things you want to befriend isn't very nice...",
        cost: 0,
        level: 0,
        maxLevel: 5,
        effect: 1,
        progression: "pokeballs"
    },
    {
        name: "Poke Balls",
        description: "Upgraded PokeBalls allow you to recieve 1.5x more PokeDollars every catch!",
        cost: 1500,
        level: 1,
        maxLevel: 5,
        effect: 1.5,
        progression: "pokeballs"
    },
    {
        name: "Great Balls",
        description: "Great Balls allow you to recieve 3x the PokeDollars for every catch!",
        cost: 4000,
        level: 2,
        maxLevel: 5,
        effect: 3,
        progression: "pokeballs"
    },
    {
        name: "Ultra Balls",
        description: "Ultra Balls get you 4.5x the PokeDollars on catch!",
        cost: 10000,
        level: 3,
        maxLevel: 5,
        effect: 4.5,
        progression: "pokeballs"
    },
    {
        name: "Master Balls",
        description: "Upgraded PokeBalls allow you to recieve 7x more PokeDollars every catch!",
        cost: 25000,
        level: 4,
        maxLevel: 5,
        effect: 7,
        progression: "pokeballs"
    },
    {
        name: "ENHANCED Master Balls",
        description: "With 15x the PokeDollars per catch, inflation is imminent and Capitalism will fall before you in ruins",
        cost: 100000,
        level: 4,
        maxLevel: 5,
        effect: 15,
        progression: "pokeballs"
    }
];

export const BAIT: StoreItemData[] = [
    {
        name: "Nothing",
        description: "Maybe you'll get lucky and something will wander by...",
        cost: 0,
        level: 0,
        maxLevel: 5,
        effect: 1,
        progression: "pokeballs"
    },
    {
        name: "Oran Berry",
        description: "Most things like Oran Berries well enough. Might attract some stronger pokemon.",
        cost: 5000,
        level: 1,
        maxLevel: 5,
        effect: 1.25,
        progression: "pokeballs"
    },
    {
        name: "Sitrus Berry",
        description: "Using Sitrus Berries as bait is sure to increase your chances of finding rare pokemon in the wild!",
        cost: 7500,
        level: 2,
        maxLevel: 5,
        effect: 1.5,
        progression: "pokeballs"
    },
    {
        name: "Poffins",
        description: "Not only will Poffins entice even rarer pokemon to appear, they'll also make them contest ready!",
        cost: 15000,
        level: 3,
        maxLevel: 5,
        effect: 2,
        progression: "pokeballs"
    },
    {
        name: "Rare Candies",
        description: "The ultimate in power, appeal, and flavor. There is no Pokemon able to resist the smell of performance enhancing drugs.",
        cost: 50000,
        level: 4,
        maxLevel: 5,
        effect: 3,
        progression: "pokeballs"
    },
    {
        name: "Poke-Crack",
        description: "100% more heartrate, 200% more seizures, 300% more jailtime, 400% more familial abandonment, 500% more legendary Pokemon. It's worth it.",
        cost: 500000,
        level: 4,
        maxLevel: 5,
        effect: 5,
        progression: "pokeballs"
    }
];

