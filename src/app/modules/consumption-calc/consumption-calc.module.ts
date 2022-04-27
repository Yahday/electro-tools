import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumptionCalcRoutingModule } from './consumption-calc-routing.module';
import { ConsumptionCalcComponent } from './consumption-calc.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddConsumerComponent } from './components/add-consumer/add-consumer.component';


@NgModule({
  declarations: [
    ConsumptionCalcComponent,
    AddConsumerComponent
  ],
  imports: [
    CommonModule,
    ConsumptionCalcRoutingModule,
    SharedModule
  ]
})
export class ConsumptionCalcModule { }
