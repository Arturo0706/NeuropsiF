import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesMotorasComponent } from './funciones-motoras.component';

describe('FuncionesMotorasComponent', () => {
  let component: FuncionesMotorasComponent;
  let fixture: ComponentFixture<FuncionesMotorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionesMotorasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionesMotorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
