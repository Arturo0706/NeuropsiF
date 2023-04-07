import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodiCarasComponent } from './codi-caras.component';

describe('CodiCarasComponent', () => {
  let component: CodiCarasComponent;
  let fixture: ComponentFixture<CodiCarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodiCarasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodiCarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
