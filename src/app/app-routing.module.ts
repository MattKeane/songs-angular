import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { NewArtistComponent } from './new-artist/new-artist.component';
import { EditArtistComponent } from './edit-artist/edit-artist.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'artists',
    component: ArtistListComponent,
    children: [
      {
        path: 'new',
        component: NewArtistComponent,
      },
      {
        path: 'edit/:id',
        component: EditArtistComponent,
      },
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
