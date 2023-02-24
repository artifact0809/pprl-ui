# PPRL Ui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Manual for installation and configuration

If the backend (Transformer Service) is running at the local machine, you have to check the `src/proxy.conf.json` to prevent CORS issues.
Otherwise you have to modify the URL to the Backend.

To install the UI locally you have to run `npm install` to get all necessary libraries.

The UI is using angular material und was build with Node 16.13.2.

Afterwards you can go to the section `Development server` above.

## Usage

Like mentioned in the assignment you can upload a CSV file by clicking on Browse. The data from the uploaded file will then be displayed in the table below. 

You can verify the data and send them to the Transformer Service by clicking on "Upload and process". Otherwise you can reset the view by clicking on "Reset File".

If you upload and process the file the result will be displayed in the table below and you cannot upload the same data again. 

You can also verify the result and download the result as CSV file by clicking on "Download Table as CSV".

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
