import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandComponent } from './pages/band/band.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateComponent } from './pages/create/create.component';

const routes: Routes = [
  {path : "", component: BandComponent},
  {path : "auth", component: AuthComponent},
  {path : "profile", component: ProfileComponent},
  {path : "profile/new-entry", component: CreateComponent},

  {path : "**" , component: BandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
