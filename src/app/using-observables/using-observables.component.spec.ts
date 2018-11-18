import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingObservablesComponent } from './using-observables.component';

describe('UsingObservablesComponent', () => {
  let component: UsingObservablesComponent;
  let fixture: ComponentFixture<UsingObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
