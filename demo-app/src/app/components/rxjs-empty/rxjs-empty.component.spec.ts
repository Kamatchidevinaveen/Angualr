import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEmptyComponent } from './rxjs-empty.component';

describe('RxjsEmptyComponent', () => {
  let component: RxjsEmptyComponent;
  let fixture: ComponentFixture<RxjsEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
