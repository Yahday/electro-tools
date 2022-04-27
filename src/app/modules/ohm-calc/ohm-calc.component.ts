import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ohmsLaw } from 'src/app/shared/utilities/ohms-law';

@Component({
  selector: 'awad-ohm-calc',
  templateUrl: './ohm-calc.component.html',
  styleUrls: ['./ohm-calc.component.scss']
})
export class OhmCalcComponent implements OnInit {

  form: FormGroup = new FormGroup({
    v: new FormControl('', [Validators.required]),
    a: new FormControl('', [Validators.required]),
    w: new FormControl('', [Validators.required]),
    o: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  clearForm() {
    this.form.reset()
  }

  onClear() {
    this.clearForm()
  }

  onCalculate() {
    if (this.form.controls.v.valid && this.form.controls.a.valid) {
      this.form.controls.w.setValue(ohmsLaw.getW(this.form.value))
      this.form.controls.o.setValue(ohmsLaw.getO(this.form.value))
      return
    }
    if (this.form.controls.v.valid && this.form.controls.w.valid) {
      this.form.controls.a.setValue(ohmsLaw.getA(this.form.value))
      this.form.controls.o.setValue(ohmsLaw.getO(this.form.value))
      return
    }
    if (this.form.controls.v.valid && this.form.controls.o.valid) {
      this.form.controls.a.setValue(ohmsLaw.getA(this.form.value))
      this.form.controls.w.setValue(ohmsLaw.getW(this.form.value))
      return
    }
    if (this.form.controls.a.valid && this.form.controls.w.valid) {
      this.form.controls.v.setValue(ohmsLaw.getV(this.form.value))
      this.form.controls.o.setValue(ohmsLaw.getO(this.form.value))
      return
    }
    if (this.form.controls.a.valid && this.form.controls.o.valid) {
      this.form.controls.v.setValue(ohmsLaw.getV(this.form.value))
      this.form.controls.w.setValue(ohmsLaw.getW(this.form.value))
      return
    }
    if (this.form.controls.w.valid && this.form.controls.o.valid) {
      this.form.controls.v.setValue(ohmsLaw.getV(this.form.value))
      this.form.controls.a.setValue(ohmsLaw.getA(this.form.value))
      return
    }
  }

}
