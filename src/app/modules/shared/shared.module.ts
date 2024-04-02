import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
// import { FlexLayoutModule } from "@angular/flex-layout";



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    // FlexLayoutModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SharedModule { }
