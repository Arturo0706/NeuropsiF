import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeletePatientsComponent } from './edit-delete-patients.component';

describe('EditDeletePatientsComponent', () => {
  let component: EditDeletePatientsComponent;
  let fixture: ComponentFixture<EditDeletePatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeletePatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeletePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
