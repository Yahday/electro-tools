import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolarCalcRoutingModule } from './solar-calc-routing.module';
import { SolarCalcComponent } from './solar-calc.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SolarCalcComponent
  ],
  imports: [
    CommonModule,
    SolarCalcRoutingModule,
    SharedModule
  ]
})
export class SolarCalcModule { }
