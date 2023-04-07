import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetecciondigitosComponent } from './detecciondigitos.component';

describe('DetecciondigitosComponent', () => {
  let component: DetecciondigitosComponent;
  let fixture: ComponentFixture<DetecciondigitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetecciondigitosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetecciondigitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
