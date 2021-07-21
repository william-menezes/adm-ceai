import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SidebarComponent,
    BreadcrumbComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    BreadcrumbComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
