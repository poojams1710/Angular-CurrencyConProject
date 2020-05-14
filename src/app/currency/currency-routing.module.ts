import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CurrencyHomeComponent}from './currency-home/currency-home.component';


const routes: Routes = [{path:'',component:CurrencyHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
