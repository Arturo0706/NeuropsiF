import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeCarasComponent } from './me-caras.component';

describe('MeCarasComponent', () => {
  let component: MeCarasComponent;
  let fixture: ComponentFixture<MeCarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeCarasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeCarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
