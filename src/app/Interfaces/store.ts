import { SafeUrl } from "@angular/platform-browser";

export interface StoreItemData {
    name: string,
    description: string,
    cost: number,
    level: number,
    maxLevel: number,
    effect: number,
    progression: string
}

export interface StoreSelectionGroup {
    group: string,
    upgrades: StoreItemData[]
}
