import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OhmCalcRoutingModule } from './ohm-calc-routing.module';
import { OhmCalcComponent } from './ohm-calc.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OhmCalcComponent
  ],
  imports: [
    CommonModule,
    OhmCalcRoutingModule,
    SharedModule
  ]
})
export class OhmCalcModule { }
