import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnButtonComponent } from './bhn-button.component';

describe('BhnButtonComponent', () => {
  let component: BhnButtonComponent;
  let fixture: ComponentFixture<BhnButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
