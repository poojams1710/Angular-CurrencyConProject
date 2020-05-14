import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{ChartHomeComponent}from './chart-home/chart-home.component';


const routes: Routes = [{path:'',component:ChartHomeComponent}];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ChartRoutingModule { }
