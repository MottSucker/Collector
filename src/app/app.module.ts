import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./Routing/app-routing.module";
import { AppComponent } from "./app.component";
import { CollectionComponent } from "./Components/collection/collection.component";
import { ProfileComponent } from "./Components/profile/profile.component";
import { WildComponent } from "./Components/wild/wild.component";
import { StoreComponent } from './Components/store/store.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { GuildComponent } from './Components/guild/guild.component';

@NgModule({
    declarations: [
        AppComponent,
        CollectionComponent,
        ProfileComponent,
        WildComponent,
        StoreComponent,
        SettingsComponent,
        GuildComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
