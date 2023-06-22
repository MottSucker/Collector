import { Component } from '@angular/core';
import { StoreSelectionGroup } from '../../Interfaces/store'
import { UserData } from "../../Interfaces/userdata";
import { FileService } from "../../Services/file-service/file-service.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

    userData: UserData;

    constructor(private fileService: FileService) {
        console.log("Created store component");

        this.fileService.loadUserData().then((user) => {
            this.userData = user;
        })
    }

}
