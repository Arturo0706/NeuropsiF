import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluideznoverbalComponent } from './fluideznoverbal.component';

describe('FluideznoverbalComponent', () => {
  let component: FluideznoverbalComponent;
  let fixture: ComponentFixture<FluideznoverbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluideznoverbalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluideznoverbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
