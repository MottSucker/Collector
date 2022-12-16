import { Component } from "@angular/core";
import { MENU_ITEMS } from "./Constants/MENU_ITEMS";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "Collector";

    menu_items = MENU_ITEMS;
    selected_page?: string;

    constructor() {
        console.log("Created main menu component");
    }

    ngOnInit(): void {
        console.log("Initialized main menu component");
    }

    onSelect(page: string): void {
        this.selected_page = page;
        console.log(this.menu_items);
    }
}
