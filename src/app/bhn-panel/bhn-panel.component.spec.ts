import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnPanelComponent } from './bhn-panel.component';

describe('BhnPanelComponent', () => {
  let component: BhnPanelComponent;
  let fixture: ComponentFixture<BhnPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
