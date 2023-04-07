import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evocacion2Component } from './evocacion2.component';

describe('Evocacion2Component', () => {
  let component: Evocacion2Component;
  let fixture: ComponentFixture<Evocacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Evocacion2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Evocacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
