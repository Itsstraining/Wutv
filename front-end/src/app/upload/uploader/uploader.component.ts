import { Component, OnInit, Input, EventEmitter, Output,NgModule } from '@angular/core';
import { FormControl,FormGroup, Validators } from "@angular/forms";
import { UploadService } from 'src/app/ui/service/upload.service';
import { fromCollectionRef } from '@angular/fire/firestore';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

 
  constructor(public upload:UploadService) { }

  files : Array<File> = [];
  // uploadform = new FormGroup({
  //   tittle: new FormControl(''),
  //   desc: new FormControl(''),
  //   thumbnail:new FormControl('')
  // })
  ngOnInit(): void {

  }
  // titleValid = new FormControl("", [
  //   Validators.required,
  //   Validators.minLength(5)
  // ]);
  // onChange() {
  //   // this.form.emit(this.titleValid.valid);
  // }
  isHovering: boolean;
  toggleHover(event: boolean) {
    this.isHovering = event;
  }
  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i))
    };
      this.upload.file=this.files[0];
    }
  }

 

