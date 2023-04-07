import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemoriaVerbalPorReconocimientoComponent } from './memoria-verbal-por-reconocimiento.component';

describe('MemoriaVerbalPorReconocimientoComponent', () => {
  let component: MemoriaVerbalPorReconocimientoComponent;
  let fixture: ComponentFixture<MemoriaVerbalPorReconocimientoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriaVerbalPorReconocimientoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemoriaVerbalPorReconocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
