import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
  ],
  exports: [
  ]
})
export class SharedModule { }
