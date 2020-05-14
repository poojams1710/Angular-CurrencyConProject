import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartHomeComponent } from './chart-home/chart-home.component';
import { ChartRoutingModule } from './chart-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ChartHomeComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class ChartModule { }
