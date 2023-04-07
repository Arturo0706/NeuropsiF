import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetencionDigitosRegresionComponent } from './retencion-digitos-regresion.component';

describe('RetencionDigitosRegresionComponent', () => {
  let component: RetencionDigitosRegresionComponent;
  let fixture: ComponentFixture<RetencionDigitosRegresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetencionDigitosRegresionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RetencionDigitosRegresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
