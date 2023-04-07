import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DibujossecuencialesComponent } from './dibujossecuenciales.component';

describe('DibujossecuencialesComponent', () => {
  let component: DibujossecuencialesComponent;
  let fixture: ComponentFixture<DibujossecuencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DibujossecuencialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DibujossecuencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
