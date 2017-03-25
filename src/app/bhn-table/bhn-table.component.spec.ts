import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnTableComponent } from './bhn-table.component';

describe('BhnTableComponent', () => {
  let component: BhnTableComponent;
  let fixture: ComponentFixture<BhnTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
