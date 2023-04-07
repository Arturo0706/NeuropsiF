import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvocacionComponent } from './evocacion.component';

describe('EvocacionComponent', () => {
  let component: EvocacionComponent;
  let fixture: ComponentFixture<EvocacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvocacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvocacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
