import { Component } from '@angular/core';
import { BAIT, POKEBALLS } from '../../Constants/STORE_ITEMS';
import { StoreItemData, StoreSelectionGroup } from '../../Interfaces/store'
import { UserData } from "../../Interfaces/userdata";
import { FileService } from "../../Services/file-service/file-service.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

    userData: UserData;
    allItems: StoreSelectionGroup[];
    displayedItems: StoreItemData[] = [];

    constructor(private fileService: FileService) {
        console.log("Created store component");

        

        this.fileService.loadUserData().then((user) => {
            this.userData = user;

            //Populate store items with constants
            this.allItems = [
                {
                    group: "pokeballs",
                    upgrades: POKEBALLS
                },
                {
                    group: "bait",
                    upgrades: BAIT
                }
            ]

            // Kinda hard coded, should probably make this better somehow
            this.displayedItems.push(this.allItems[0].upgrades[user.upgrades.pokeballs])
            this.displayedItems.push(this.allItems[1].upgrades[user.upgrades.bait])
        })
    }

}
