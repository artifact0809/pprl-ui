import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TransformerService } from '../shared/transformer.service';

export interface CSVElement {
  firstName: string;
  id: number;
  lastName: string;
  gender: string;
  birthDate: string;
}

@Component({
  selector: 'app-pprl-data-view',
  templateUrl: './pprl-data-view.component.html',
  styleUrls: ['./pprl-data-view.component.css']
})
export class PprlDataViewComponent implements OnInit {

  constructor(
    private transformerService: TransformerService
  ) {}

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'No file selected';
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'birthDate'];
  dataSource: CSVElement[] = [];
  loading = false;
  transformed = false;

  ngOnInit(): void {

  }

  uploadFileEvt(file: any) {
    if (file.target.files && file.target.files[0] && file.target.files.length == 1) {
      this.fileAttr = file.target.files[0].name;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.dataSource = [];
        let result = e.target.result;
        const list: string[] = result.split('\n');
        list.shift();
        list.forEach( e => {
          var entries = e.split(',');
          if (entries.length === 5) {
            this.dataSource.push({id: +entries[0], firstName: entries[1], lastName: entries[2], gender: entries[3], birthDate: entries[4]});
          }
        });
        this.transformed = false;
      };
      reader.readAsText(file.target.files[0]);
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'No file selected';
    }
  }

  resetUploadedFile() {
    this.dataSource = [];
    this.fileAttr = 'No file selected';
  }

  transformData(data: Array<CSVElement>) {
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    this.transformerService.transformData(data).subscribe({
      next: (data) => {
        this.dataSource = [];
        this.dataSource = data.entities;
        this.loading = false;
        this.transformed = true;
      },
      error: (error) => {
        this.loading = false;
      }
    });
  }

  saveDateToCSV(data: Array<any>) {
      if (data.length == 0) {
        return '';
      }

      let propertyNames = Object.keys(data[0]);
      let rowWithPropertyNames = 'id,first_name,last_name,gender,birth_date\n';

      let csvContent = rowWithPropertyNames;

      let rows: string[] = [];

      data.forEach((item) => {
        let values: string[] = [];
        propertyNames.forEach((key) => {
          let val: any = item[key];;

          if (val !== undefined && val !== null) {
            val = new String(val);
          } else {
            val = '';
          }
          values.push(val);
        })
        rows.push(values.join(','));
      });
      csvContent += rows.join('\n');
      let filename = 'pprl-transform-processed.csv';
      let fileContent = csvContent;
      const file = new Blob([fileContent], {type: "text/plain"});
      const link = document.createElement("a");
      link.href = URL.createObjectURL(file);
      link.download = filename;
      link.click();
      link.remove();
      return;
  }

}

