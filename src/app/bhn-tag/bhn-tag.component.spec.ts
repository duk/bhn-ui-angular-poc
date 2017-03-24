import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnTagComponent } from './bhn-tag.component';

describe('BhnTagComponent', () => {
  let component: BhnTagComponent;
  let fixture: ComponentFixture<BhnTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
