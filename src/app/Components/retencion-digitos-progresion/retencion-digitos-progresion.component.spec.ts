import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetencionDigitosProgresionComponent } from './retencion-digitos-progresion.component';

describe('RetencionDigitosProgresionComponent', () => {
  let component: RetencionDigitosProgresionComponent;
  let fixture: ComponentFixture<RetencionDigitosProgresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetencionDigitosProgresionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RetencionDigitosProgresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
