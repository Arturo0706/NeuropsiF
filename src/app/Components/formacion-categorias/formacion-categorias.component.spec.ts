import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionCategoriasComponent } from './formacion-categorias.component';

describe('FormacionCategoriasComponent', () => {
  let component: FormacionCategoriasComponent;
  let fixture: ComponentFixture<FormacionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
