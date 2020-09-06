import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsThrowErrorComponent } from './rxjs-throw-error.component';

describe('RxjsThrowErrorComponent', () => {
  let component: RxjsThrowErrorComponent;
  let fixture: ComponentFixture<RxjsThrowErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsThrowErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsThrowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
