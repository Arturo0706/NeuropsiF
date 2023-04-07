import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParesasociadosComponent } from './paresasociados.component';

describe('ParesasociadosComponent', () => {
  let component: ParesasociadosComponent;
  let fixture: ComponentFixture<ParesasociadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParesasociadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParesasociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
