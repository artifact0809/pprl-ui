import { SharedModule } from "../shared/shared.module";
import { NgModule } from '@angular/core';
import { PprlDataViewComponent } from './pprl-data-view.component';

@NgModule({
    declarations: [
        PprlDataViewComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        PprlDataViewComponent 
    ]
  })
  export class PprlDataViewModule {}