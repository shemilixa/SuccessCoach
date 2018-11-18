import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittargetComponent } from './edittarget.component';

describe('EdittargetComponent', () => {
  let component: EdittargetComponent;
  let fixture: ComponentFixture<EdittargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
