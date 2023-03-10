import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MatSidenav } from "@angular/material/sidenav";

// Import services
import { FileService } from "./Services/file-service/file-service.service";
import { PokemonService } from "./Services/pokeapi-service/pokeapi-service";

interface NavigationItem {
    name: string;
    icon: string;
    svg: boolean;
    route: string;
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "Collector";

    page_names: string[] = [];
    menu_items: NavigationItem[] = [];

    selected_page?: NavigationItem;

    constructor(
        private pokemonService: PokemonService,
        private fileService: FileService,
        private router: Router
    ) {
        console.log("Created main menu component");
    }

    ngOnInit(): void {
        this.getMenuItems(); // Load menu items
        console.log("Initialized main menu component");
    }

    //When menu button is clicked, navigate to clicked page
    onSelect(page: NavigationItem): void {
        this.selected_page = page; // When button is clicked, update selected page
        console.log("Navigating to: " + "/" + page.route);
        this.router.navigate(["/" + page.route]);
    }

    // Retrieves all the menu items from the service
    getMenuItems(): void {
        console.log("Getting menu items...");
        this.fileService.getMenuItems().subscribe((menuItems) => {
            this.page_names = menuItems;
            menuItems.forEach((item) => {
                console.log("adding: " + item);
                this.menu_items.push({
                    name: item,
                    icon: "",
                    svg: false,
                    route: item,
                });
            });
            console.log("Retrieved menu items...");
        });
    }
}
