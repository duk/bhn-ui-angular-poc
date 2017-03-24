import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnContentComponent } from './bhn-content.component';

describe('BhnContentComponent', () => {
  let component: BhnContentComponent;
  let fixture: ComponentFixture<BhnContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
