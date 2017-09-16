import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Upload } from '../models/upload.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  files: FileList;
  upload: Upload;

  constructor(private uploadService: UploadService) { }

  handleFiles(event) {
    this.files = event.target.files;
  }

  uploadFiles() {
    const filesToUpload = this.files;
    const fileIndex = _.range(filesToUpload.length);
    _.each(fileIndex, (index) => {
      this.upload = new Upload(filesToUpload[index]);
      this.uploadService.uploadFile(this.upload);
    });
  }

}
