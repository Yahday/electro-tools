import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionCalcComponent } from './consumption-calc.component';

describe('ConsumptionCalcComponent', () => {
  let component: ConsumptionCalcComponent;
  let fixture: ComponentFixture<ConsumptionCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
