import { Component, Input, OnInit } from "@angular/core";
import { StoreItemData } from "../../../Interfaces/store";

@Component({
    selector: "store-item-card",
    templateUrl: "./store-item-card.component.html",
    styleUrls: ["./store-item-card.component.css"],
})
export class StoreItemCardComponent implements OnInit {

    @Input() item: StoreItemData;

    constructor() {
    }

    ngOnInit() {

    }
}
