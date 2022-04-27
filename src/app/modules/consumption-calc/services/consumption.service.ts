import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Consumer } from '../models/Consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {
  private consumption = new BehaviorSubject<number>(0);
  consumption$ = this.consumption.asObservable();
  consumers: Consumer[] = [];
  constructor() { }

  calculateConsumption(value: number) {
    const consumption = this.consumption.getValue() + value;
    this.consumption.next(consumption);
  }

  addConsumer(consumer: Consumer) {
    this.consumers.push(consumer)
    this.calculateConsumption(consumer.consumption)
  }

  delete(i: number, consumption: number): void {
    this.consumers.splice(i, 1)
    this.calculateConsumption((-consumption))
  }

  clear():void {
    this.consumers.length = 0
    this.consumption.next(0)
  }

}
