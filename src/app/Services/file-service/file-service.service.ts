import { Injectable } from '@angular/core';
import { MENU_ITEMS } from '../../Constants/MENU_ITEMS'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

    constructor() { }

    // Gets all menu items from the constants file
    getMenuItems(): Observable<string[]> {
        const menuItems = of(MENU_ITEMS);
        return menuItems;
    }
}
