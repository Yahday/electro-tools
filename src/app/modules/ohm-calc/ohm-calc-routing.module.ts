import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OhmCalcComponent } from './ohm-calc.component';

const routes: Routes = [
  {
    path: '',
    component: OhmCalcComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OhmCalcRoutingModule { }
