import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnCardComponent } from './bhn-card.component';

describe('BhnCardComponent', () => {
  let component: BhnCardComponent;
  let fixture: ComponentFixture<BhnCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
