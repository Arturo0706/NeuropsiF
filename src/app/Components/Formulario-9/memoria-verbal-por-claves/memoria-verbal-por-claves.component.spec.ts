import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemoriaVerbalPorClavesComponent } from './memoria-verbal-por-claves.component';

describe('MemoriaVerbalPorClavesComponent', () => {
  let component: MemoriaVerbalPorClavesComponent;
  let fixture: ComponentFixture<MemoriaVerbalPorClavesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriaVerbalPorClavesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemoriaVerbalPorClavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
