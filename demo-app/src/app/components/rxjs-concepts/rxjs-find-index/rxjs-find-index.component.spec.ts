import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFindIndexComponent } from './rxjs-find-index.component';

describe('RxjsFindIndexComponent', () => {
  let component: RxjsFindIndexComponent;
  let fixture: ComponentFixture<RxjsFindIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsFindIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFindIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
