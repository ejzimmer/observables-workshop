import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsInAngularComponent } from './rxjs-in-angular.component';

describe('RxjsInAngularComponent', () => {
  let component: RxjsInAngularComponent;
  let fixture: ComponentFixture<RxjsInAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsInAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
