import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParesAsociadosComponent } from './pares-asociados.component';

describe('ParesAsociadosComponent', () => {
  let component: ParesAsociadosComponent;
  let fixture: ComponentFixture<ParesAsociadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParesAsociadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParesAsociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
