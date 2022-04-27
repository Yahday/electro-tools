import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolarCalcComponent } from './solar-calc.component';

const routes: Routes = [
  {
    path: '',
    component: SolarCalcComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolarCalcRoutingModule { }
