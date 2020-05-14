import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'table',
    loadChildren: () =>
      import('./table/table.module').then(m => m.TableModule)
  },
  {
  path: 'currency',
    loadChildren: () =>
      import('./currency/currency.module').then(m => m.CurrencyModule)
  },
  {
  path :'chart',
    loadChildren:() =>
      import ('./chart/chart.module').then(m=> m.ChartModule)
  }
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [
      RouterModule
  ]
  
})
export class AppRoutingModule { }
