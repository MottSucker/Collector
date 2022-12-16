import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../Components/profile/profile.component';
import { CollectionComponent } from '../Components/collection/collection.component';
import { WildComponent } from '../Components/wild/wild.component';
import { StoreComponent } from '../Components/store/store.component';
import { SettingsComponent } from '../Components/settings/settings.component';
import { GuildComponent } from '../Components/guild/guild.component';

const routes: Routes = [
    { path: 'Profile', component: ProfileComponent },
    { path: 'Collection', component: CollectionComponent },
    { path: 'Wild', component: WildComponent },
    { path: 'Store', component: StoreComponent },
    { path: 'Settings', component: SettingsComponent },
    { path: 'Guild', component: GuildComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }