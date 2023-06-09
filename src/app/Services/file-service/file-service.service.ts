import { Injectable } from "@angular/core";
import { MENU_ITEMS } from "../../Constants/MENU_ITEMS";
import { from, Observable, of } from "rxjs";
import { UserData } from "../../Interfaces/userdata";

@Injectable({
    providedIn: "root",
})
export class FileService {

    private defaultUserDataPath: string = "C:/ProgramData/Collector/userData.json";

    constructor() {}

    // Gets all menu items from the constants file
    getMenuItems(): Observable<string[]> {
        const menuItems = of(MENU_ITEMS);
        return menuItems;
    }
    
    // Loads the user save data. If it's not there, makes it.
    loadUserData(): Promise<UserData> {
        console.log("Loading user data.");
        var user: UserData;
        var loadUserPromise = new Promise<UserData>((resolve, reject) => {
            window.electronAPI.readFile(this.defaultUserDataPath).then((userData) => {
                user = JSON.parse(userData);
                resolve(user);
            })
        })

        return loadUserPromise;
    }


    updateUserData(userData: UserData): Promise<boolean> {
        console.log("Updating user data");

        var userDataString = JSON.stringify(userData);
        return window.electronAPI.saveFile({ filePath: this.defaultUserDataPath, data: userDataString })

    }
    
}
