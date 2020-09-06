import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsForkJoinComponent } from './rxjs-fork-join.component';

describe('RxjsForkJoinComponent', () => {
  let component: RxjsForkJoinComponent;
  let fixture: ComponentFixture<RxjsForkJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsForkJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
