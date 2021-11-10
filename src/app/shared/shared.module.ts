import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
