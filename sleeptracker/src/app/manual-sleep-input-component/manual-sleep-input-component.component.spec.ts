import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManualSleepInputComponentComponent } from './manual-sleep-input-component.component';

describe('ManualSleepInputComponentComponent', () => {
  let component: ManualSleepInputComponentComponent;
  let fixture: ComponentFixture<ManualSleepInputComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualSleepInputComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManualSleepInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
