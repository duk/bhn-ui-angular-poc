import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnTabsComponent } from './bhn-tabs.component';

describe('BhnTabsComponent', () => {
  let component: BhnTabsComponent;
  let fixture: ComponentFixture<BhnTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
