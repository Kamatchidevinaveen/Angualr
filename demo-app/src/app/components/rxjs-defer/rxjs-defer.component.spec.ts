import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDeferComponent } from './rxjs-defer.component';

describe('RxjsDeferComponent', () => {
  let component: RxjsDeferComponent;
  let fixture: ComponentFixture<RxjsDeferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsDeferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
