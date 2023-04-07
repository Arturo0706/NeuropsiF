import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemoriaVerbalEspontaneaComponent } from './memoria-verbal-espontanea';

describe('MemoriaVerbalEspontaneaComponent', () => {
  let component: MemoriaVerbalEspontaneaComponent;
  let fixture: ComponentFixture<MemoriaVerbalEspontaneaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriaVerbalEspontaneaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemoriaVerbalEspontaneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
