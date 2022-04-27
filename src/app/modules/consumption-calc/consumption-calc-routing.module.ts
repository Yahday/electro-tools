import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumptionCalcComponent } from './consumption-calc.component';

const routes: Routes = [
  {
    path: '',
    component: ConsumptionCalcComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumptionCalcRoutingModule { }
