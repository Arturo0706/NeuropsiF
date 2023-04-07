import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cubosenprogrecioncomponets } from '../cubos-en-progrecion/cubos-en-progrecion.component';

describe('RetencionDigitosProgresionComponent', () => {
  let component: cubosenprogrecioncomponets;
  let fixture: ComponentFixture<cubosenprogrecioncomponets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cubosenprogrecioncomponets ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(cubosenprogrecioncomponets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
