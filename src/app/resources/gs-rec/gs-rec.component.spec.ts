import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsRecComponent } from './gs-rec.component';

describe('GsRecComponent', () => {
  let component: GsRecComponent;
  let fixture: ComponentFixture<GsRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
