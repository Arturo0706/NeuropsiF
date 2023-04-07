import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoVisoEspacialComponent } from './proceso-viso-espacial.component';

describe('ProcesoVisoEspacialComponent', () => {
  let component: ProcesoVisoEspacialComponent;
  let fixture: ComponentFixture<ProcesoVisoEspacialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesoVisoEspacialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesoVisoEspacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
