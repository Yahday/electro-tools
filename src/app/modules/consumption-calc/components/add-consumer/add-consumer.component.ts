import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Consumer } from '../../models/Consumer';
import { cycleOptions, timeOptions } from '../../models/Select-Option';

@Component({
  selector: 'awad-add-consumer',
  templateUrl: './add-consumer.component.html',
  styleUrls: ['./add-consumer.component.scss']
})
export class AddConsumerComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    time_value: new FormControl('', [Validators.required]),
    time_unit: new FormControl('h', [Validators.required]),
    cycle_value: new FormControl('', [Validators.required]),
    cycle_unit: new FormControl('d', [Validators.required]),
    power: new FormControl('', [Validators.required])
  })

  timeOptions = timeOptions;
  cycleOptions = cycleOptions;
  v?: number;
  a?: number;

  constructor(
    public dialogRef: MatDialogRef<AddConsumerComponent>,
  ) {}

  get name() {
    return this.form.get('name') as FormControl
  }

  get time() {
    return this.form.get('time_value') as FormControl
  }

  get cycle() {
    return this.form.get('cycle_value') as FormControl
  }

  get power() {
    return this.form.get('power') as FormControl
  }

  ngOnInit(): void {
  }

  onSend() {
    this.dialogRef.close(this.generateConsumer());
  }

  getTime():number {
    const value = this.form.get('time_value')?.value
    const unit = this.form.get('time_unit')?.value
    switch (unit) {
      case 'h': return this.useFrecuency(value);
      case 'm': return this.useFrecuency((value/60));
      case 's': return this.useFrecuency((value/60)/60);
      default: return 0;
    }
  }

  useFrecuency(hours: number):number {
    const value = this.form.get('cycle_value')?.value
    const unit = this.form.get('cycle_unit')?.value
    switch (unit) {
      case 'd': return (value*hours)*31;
      case 'w': return (value*hours)*4;
      case 'm': return (value*hours);
      default: return 0;
    }
  }

  calculatePower(): void {
    if (!this.v || !this.a) return;
    this.form.get('power')?.setValue(this.v*this.a);
  }

  getConsumption(time: number, power: number):number {
    return (time*power)/1000;
  }

  generateConsumer():Consumer {
    const name = this.form.get('name')?.value;
    const time = this.getTime();
    const power = this.form.get('power')?.value;
    const consumption = this.getConsumption(time, power)
    return {
      name, time, power, consumption
    }
  }

  powerChange() {
    this.a = 0;
    this.v = 0;
  }

  onClear() {
    this.form.reset()
    this.a = 0;
    this.v = 0;
  }

}
