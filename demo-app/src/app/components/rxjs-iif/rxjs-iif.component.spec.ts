import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIifComponent } from './rxjs-iif.component';

describe('RxjsIifComponent', () => {
  let component: RxjsIifComponent;
  let fixture: ComponentFixture<RxjsIifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsIifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsIifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
