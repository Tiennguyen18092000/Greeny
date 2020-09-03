import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer123Component } from './footer123.component';

describe('Footer123Component', () => {
  let component: Footer123Component;
  let fixture: ComponentFixture<Footer123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
