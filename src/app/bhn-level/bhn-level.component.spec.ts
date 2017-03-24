import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnLevelComponent } from './bhn-level.component';

describe('BhnLevelComponent', () => {
  let component: BhnLevelComponent;
  let fixture: ComponentFixture<BhnLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
