import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubNavComponent } from './sub-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SubNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SubNavComponent]
})
export class SubNavModule { }
