import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModules } from 'src/app/shared/models/AppModules';

@Component({
  selector: 'awad-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modules: AppModules[] = [
    {
      title: 'Calculadora Ley de Ohm',
      description: 'Calcula la tensión, la corriente, la potencia o la resistencia con nuestra fiel calculadora basada en la ley de Ohm.',
      icon: '/assets/svg/ohms_atom.svg',
      route: 'ohms-calculator'
    },
    {
      title: 'Calcular consumo eléctrico',
      description: 'Calcula el total de la energía eléctrica que se está consumiendo. Perfecto para verificar tu consumo en el recibo de luz.',
      icon: '/assets/svg/consumption.svg',
      route: 'electric-consumption'
    },
    {
      title: 'Calculadora paneles solares',
      description: 'Calcula cuántos páneles solares ocupas instalar en tu casa o negocio a partir del consumo en tu recibo de luz.',
      icon: '/assets/svg/solar_calc.svg',
      route: 'solar-calculator'
    },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goTo(route: string) {
    this.router.navigate([route])
  }
}
