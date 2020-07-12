import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkcComponent } from './lkc.component';

describe('LkcComponent', () => {
  let component: LkcComponent;
  let fixture: ComponentFixture<LkcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
