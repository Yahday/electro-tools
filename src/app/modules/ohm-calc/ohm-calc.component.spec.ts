import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhmCalcComponent } from './ohm-calc.component';

describe('OhmCalcComponent', () => {
  let component: OhmCalcComponent;
  let fixture: ComponentFixture<OhmCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhmCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhmCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
