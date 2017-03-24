import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnMenuComponent } from './bhn-menu.component';

describe('BhnMenuComponent', () => {
  let component: BhnMenuComponent;
  let fixture: ComponentFixture<BhnMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
