import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Panel } from './models/Panel';

@Component({
  selector: 'awad-solar-calc',
  templateUrl: './solar-calc.component.html',
  styleUrls: ['./solar-calc.component.scss']
})
export class SolarCalcComponent implements OnInit {

  form: FormGroup = new FormGroup({
    kwh: new FormControl('', [Validators.required]),
    m: new FormControl(61, [Validators.required]),
    w: new FormControl(250, [Validators.required]),
    e: new FormControl('', [Validators.required])
  })

  states = [
    {
      name: 'Aguascalientes',
      value: 6
    },
    {
      name: 'Baja California',
      value: 6
    },
    {
      name: 'Baja California Sur',
      value: 6
    },
    {
      name: 'Campeche',
      value: 6
    },
    {
      name: 'Chiapas',
      value: 5
    },
    {
      name: 'Chihuahua',
      value: 6
    },
    {
      name: 'Ciudad de México',
      value: 5
    },
    {
      name: 'Coahuila',
      value: 5
    },
    {
      name: 'Colima',
      value: 6
    },
    {
      name: 'Durango',
      value: 6
    },
    {
      name: 'Guanajuato',
      value: 6
    },
    {
      name: 'Guerrero',
      value: 6
    },
    {
      name: 'Hidalgo',
      value: 5
    },
    {
      name: 'Jalisco',
      value: 6
    },
    {
      name: 'Mexico Edo.',
      value: 6
    },
    {
      name: 'Michoacán',
      value: 6
    },
    {
      name: 'Morelos',
      value: 6
    },
    {
      name: 'Nayarit',
      value: 6
    },
    {
      name: 'Nuevo León',
      value: 5
    },
    {
      name: 'Oaxaca',
      value: 5
    },
    {
      name: 'Puebla',
      value: 5
    },
    {
      name: 'Querétaro',
      value: 5
    },
    {
      name: 'Quintana Roo',
      value: 6
    },
    {
      name: 'San Luis Potosí',
      value: 5
    },
    {
      name: 'Sinaloa',
      value: 6
    },
    {
      name: 'Sonora',
      value: 6
    },
    {
      name: 'Tabasco',
      value: 5
    },
    {
      name: 'Tamaulipas',
      value: 5
    },
    {
      name: 'Tlaxcala',
      value: 5
    },
    {
      name: 'Veracruz',
      value: 4
    },
    {
      name: 'Yucatán',
      value: 6
    },
    {
      name: 'Zacatecas',
      value: 6
    }
  ]

  panels: Panel | any;

  constructor() { 
    this.panels
  }

  ngOnInit(): void {
  }

  get consumption() {
    return this.form.get('kwh')?.value
  }

  get state() {
    return this.form.get('e')?.value
  }

  get month() {
    return this.form.get('m')?.value
  }

  get power() {
    return this.form.get('w')?.value
  }

  clearForm() {
    this.form.reset()
  }

  onClear() {
    this.panels.isVisible = false;
    this.clearForm()
  }

  onCalculate() {
    this.panels = new Panel(this.power, this.state, this.consumption, this.month, true);
  }

}
