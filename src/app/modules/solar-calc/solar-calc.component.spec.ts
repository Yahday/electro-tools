import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarCalcComponent } from './solar-calc.component';

describe('SolarCalcComponent', () => {
  let component: SolarCalcComponent;
  let fixture: ComponentFixture<SolarCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
