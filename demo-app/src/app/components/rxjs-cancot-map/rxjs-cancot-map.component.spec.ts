import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCancotMapComponent } from './rxjs-cancot-map.component';

describe('RxjsCancotMapComponent', () => {
  let component: RxjsCancotMapComponent;
  let fixture: ComponentFixture<RxjsCancotMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsCancotMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsCancotMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
