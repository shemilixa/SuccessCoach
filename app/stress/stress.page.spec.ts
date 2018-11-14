import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StressPage } from './stress.page';

describe('StressPage', () => {
  let component: StressPage;
  let fixture: ComponentFixture<StressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
