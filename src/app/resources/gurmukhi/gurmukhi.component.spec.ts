import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GurmukhiComponent } from './gurmukhi.component';

describe('GurmukhiComponent', () => {
  let component: GurmukhiComponent;
  let fixture: ComponentFixture<GurmukhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GurmukhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurmukhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
