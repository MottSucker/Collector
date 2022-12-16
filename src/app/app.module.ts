import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./Routing/app-routing.module";

// Components
import { AppComponent } from "./app.component";
import { CollectionComponent } from "./Components/collection/collection.component";
import { ProfileComponent } from "./Components/profile/profile.component";
import { WildComponent } from "./Components/wild/wild.component";
import { StoreComponent } from "./Components/store/store.component";
import { SettingsComponent } from "./Components/settings/settings.component";
import { GuildComponent } from "./Components/guild/guild.component";

// Navigation modules
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatTreeModule } from "@angular/material/tree";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { MatTabsModule } from "@angular/material/tabs";

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
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        FormsModule,
        MatCheckboxModule,
        MatTreeModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatDividerModule,
        MatTabsModule,
    ],
    exports: [
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        FormsModule,
        MatCheckboxModule,
        MatTreeModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatDividerModule,
        MatTabsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
