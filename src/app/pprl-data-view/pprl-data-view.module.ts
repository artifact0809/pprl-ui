import { SharedModule } from "../shared/shared.module";
import { NgModule } from '@angular/core';
import { PprlDataViewComponent } from './pprl-data-view.component';
import { CommonModule } from '@angular/common';
import { TransformerService } from "../shared/transformer.service";

@NgModule({
    declarations: [
        PprlDataViewComponent
    ],
    imports: [
        SharedModule,
        CommonModule
    ],
    exports: [
        PprlDataViewComponent 
    ], 
    providers: [
        TransformerService
    ]
  })
  export class PprlDataViewModule {}