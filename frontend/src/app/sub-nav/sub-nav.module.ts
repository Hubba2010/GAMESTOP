import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubNavComponent } from './sub-nav.component';



@NgModule({
  declarations: [
    SubNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SubNavComponent]
})
export class SubNavModule { }
