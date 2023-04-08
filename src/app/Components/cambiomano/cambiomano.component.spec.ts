import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiomanoComponent } from './cambiomano.component';

describe('CambiomanoComponent', () => {
  let component: CambiomanoComponent;
  let fixture: ComponentFixture<CambiomanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiomanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiomanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
