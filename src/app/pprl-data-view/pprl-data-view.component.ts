import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export interface CSVElement {
  firstName: string;
  id: number;
  lastName: string;
  gender: string;
  birthday: string;
}

const ELEMENT_DATA: CSVElement[] = [
  {id: 1, firstName: 'Hydrogen', lastName: "Mustermann", gender: 'Male', birthday: '1990-08-09'},
  {id: 2, firstName: 'Helium', lastName: "Mustermann", gender: 'Female', birthday: '1990-08-09'},
  {id: 3, firstName: 'Lithium', lastName: "Mustermann", gender: 'Male', birthday: '1990-08-09'},
  {id: 4, firstName: 'Beryllium', lastName: "Mustermann", gender: 'Female', birthday: '1990-08-09'},
  {id: 5, firstName: 'Boron', lastName: "Mustermann", gender: 'Female', birthday: '1990-08-09'},
  {id: 6, firstName: 'Carbon', lastName: "Mustermann", gender: 'Male', birthday: '1990-08-09'},
  {id: 7, firstName: 'Nitrogen', lastName: "Mustermann", gender: 'Female', birthday: '1990-08-09'},
  {id: 8, firstName: 'Oxygen', lastName: "Mustermann", gender: 'Female', birthday: '1990-08-09'},
  {id: 9, firstName: 'Fluorine', lastName: "Mustermann", gender: 'Male', birthday: '1990-08-09'},
  {id: 10, firstName: 'Neon', lastName: "Mustermann", gender: 'Female', birthday: '1990-08-09'},
];

@Component({
  selector: 'app-pprl-data-view',
  templateUrl: './pprl-data-view.component.html',
  styleUrls: ['./pprl-data-view.component.css']
})
export class PprlDataViewComponent implements OnInit {

  constructor() { }

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'No file selected';
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'birthday'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'No file selected';
    }
  }

}

