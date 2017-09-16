import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GalleryImage } from '../models/galleryImage.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import 'firebase/storage';

@Injectable()
export class ImageService {

  private uid: string;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe( auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  getImages(): Observable<GalleryImage[]> {
    return this.db.list('uploads');
  }

  getImage(key: string) {
    return firebase.database().ref('uploads/' + key)
      .once('value')
      .then((snap) => snap.val());
  }

}
