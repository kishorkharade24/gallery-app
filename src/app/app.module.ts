import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';

import { AuthenticationGaurd } from './services/authenticationGaurd.service';
import { AuthenticationService } from './services/authentication.service';
import { ImageService } from './services/image.service';
import { UploadService } from './services/upload.service';
import { AlertService } from './services/alert.service';

import { appRoutes } from '../routes';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    NavbarComponent,
    LoginComponent,
    UploadComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthenticationGaurd,
    AuthenticationService,
    ImageService,
    UploadService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
