import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationLink } from 'src/app/shared/models/NavigationLink';

@Component({
  selector: 'awad-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navLinks: NavigationLink[] = [
    {
        name: 'inicio',
        icon: 'home',
        route: ''
    },
    {
      name: 'Ohms Calc.',
      icon: 'history_edu',
      route: 'ohms-calculator'
    },
    {
      name: 'Consumo elec.',
      icon: 'travel',
      route: 'electric-consumption'
    },
    {
      name: 'Calc. Solar',
      icon: 'travel',
      route: 'solar-calculator'
    }
  ]

  @Output() changeMenu: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCloseButton() {
    this.changeMenu.emit()
  }

}
