import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtargetPage } from './newtarget.page';

describe('NewtargetPage', () => {
  let component: NewtargetPage;
  let fixture: ComponentFixture<NewtargetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtargetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtargetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
