import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFindComponent } from './rxjs-find.component';

describe('RxjsFindComponent', () => {
  let component: RxjsFindComponent;
  let fixture: ComponentFixture<RxjsFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
