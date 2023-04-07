import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaClinica2Component } from './historia-clinica2.component';

describe('HistoriaClinica2Component', () => {
  let component: HistoriaClinica2Component;
  let fixture: ComponentFixture<HistoriaClinica2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaClinica2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaClinica2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
