import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesSucesivasComponent } from './series-sucesivas.component';

describe('SeriesSucesivasComponent', () => {
  let component: SeriesSucesivasComponent;
  let fixture: ComponentFixture<SeriesSucesivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesSucesivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesSucesivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
