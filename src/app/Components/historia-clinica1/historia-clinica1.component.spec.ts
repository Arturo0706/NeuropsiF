import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaClinica1Component } from './historia-clinica1.component';

describe('HistoriaClinica1Component', () => {
  let component: HistoriaClinica1Component;
  let fixture: ComponentFixture<HistoriaClinica1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaClinica1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaClinica1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
