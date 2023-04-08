import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesReacComponent } from './funciones-reac.component';

describe('FuncionesReacComponent', () => {
  let component: FuncionesReacComponent;
  let fixture: ComponentFixture<FuncionesReacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionesReacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionesReacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
