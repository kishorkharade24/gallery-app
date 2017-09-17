import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { LoginComponent } from './app/login/login.component';
import { UploadComponent } from './app/upload/upload.component';
import { AuthenticationGaurd } from './app/services/authenticationGaurd.service';
import {RegisterComponent} from "./app/register/register.component";

export const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGaurd]},
  { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGaurd]},
  { path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGaurd]},
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];
