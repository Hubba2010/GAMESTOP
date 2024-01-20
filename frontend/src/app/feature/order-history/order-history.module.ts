import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryComponent } from './order-history.component';
import { PluckPipeModule } from 'src/app/shared/pipe/pluck.module';



@NgModule({
  declarations: [
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    PluckPipeModule
  ]
})
export class OrderHistoryModule { }
