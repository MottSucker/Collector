import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./Routing/app-routing.module";
// Components
import { AppComponent } from "./app.component";
import { CollectionComponent } from "./Components/collection/collection.component";
import { ProfileComponent } from "./Components/profile/profile.component";
import { WildComponent } from "./Components/wild/wild.component";
import { StoreComponent } from "./Components/store/store.component";
import { SettingsComponent } from "./Components/settings/settings.component";
import { GuildComponent } from "./Components/guild/guild.component";
import { PokemonCardComponent } from "./Components/.shared_modules/pokemon-card/pokemon-card.component"

// Material modules
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
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [
        AppComponent,
        CollectionComponent,
        ProfileComponent,
        WildComponent,
        StoreComponent,
        SettingsComponent,
        GuildComponent,
        PokemonCardComponent,
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
        MatDialogModule,
        MatDividerModule,
        MatTabsModule,
        MatIconModule,
        HttpClientModule,
        MatCardModule,
        MatMenuModule,
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
        MatIconModule,
        MatCardModule,
        MatMenuModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
