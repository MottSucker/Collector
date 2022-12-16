import { Component } from "@angular/core";
import { MENU_ITEMS } from "./Constants/MENU_ITEMS";
import { Router } from "@angular/router";

// Import services
import { FileService } from "./Services/file-service/file-service.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "Collector";

    menu_items: string[] = [];
    selected_page?: string;

    constructor(private fileService: FileService, private router: Router) {
        console.log("Created main menu component");
    }

    ngOnInit(): void {
        this.getMenuItems(); // Load menu items
        console.log("Initialized main menu component");
    }

    //When menu button is clicked, navigate to clicked page
    onSelect(page: string): void {
        this.selected_page = page; // When button is clicked, update selected page
        console.log("Navigating to: " + '/' + page);
        this.router.navigate(['/' + page]);
    }

    // Retrieves all the menu items from the service
    getMenuItems(): void {
        this.fileService.getMenuItems().subscribe((menuItems) => {
            this.menu_items = menuItems;
        });
    }
}
