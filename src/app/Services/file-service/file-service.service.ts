import { Injectable } from "@angular/core";
import { MENU_ITEMS } from "../../Constants/MENU_ITEMS";
import { from, Observable, of } from "rxjs";
import * as fs from "fs";
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

        var user: UserData;
        var dataPromise: Promise<UserData>;

        // Read user data from the json
        var readDataPromise = new Promise<UserData>((resolve, reject) => {
            console.log("Reading User data from file");
            try {
                fs.readFile(this.defaultUserDataPath, (err, userData) => {
                    console.log("File has been read.");
                    user = JSON.parse(userData.toString());
                    resolve(user);
                });
            } catch(err) {
                throw err;
            }

        })

        return readDataPromise;
    }

    // Maybe this shoudl return something but I really dont care anymore I hate async
    createUserData(): void {
        console.log("Creating user data file");
        fs.mkdir(this.defaultUserDataPath, { recursive: true }, (err, path) => {
            console.log("Created directory: " + path)
            if (err) throw err;
        });
    }


    async updateUserData(userData: UserData): Promise<void> {
        var userDataString = JSON.stringify(userData);
        await fs.writeFile('user.json', userDataString, err => {
            if (err) {
                throw err
            }
            console.log('JSON data is saved.')
        })
    }
    
}
