import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CollectionComponent } from "./Components/collection/collection.component";
import { ProfileComponent } from "./Components/profile/profile.component";
import { WildComponent } from "./Components/wild/wild.component";

@NgModule({
    declarations: [
        AppComponent,
        CollectionComponent,
        ProfileComponent,
        WildComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
