import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIntervalComponent } from './rxjs-interval.component';

describe('RxjsIntervalComponent', () => {
  let component: RxjsIntervalComponent;
  let fixture: ComponentFixture<RxjsIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
