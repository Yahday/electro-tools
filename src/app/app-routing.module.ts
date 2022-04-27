import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ohms-calculator',
    loadChildren: ()=> import('./modules/ohm-calc/ohm-calc.module').then(m=>m.OhmCalcModule)
  },
  {
    path: 'electric-consumption',
    loadChildren: ()=> import('./modules/consumption-calc/consumption-calc.module').then(m=>m.ConsumptionCalcModule)
  },
  {
    path: 'solar-calculator',
    loadChildren: ()=> import('./modules/solar-calc/solar-calc.module').then(m=>m.SolarCalcModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
