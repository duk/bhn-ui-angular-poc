import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnFooterComponent } from './bhn-footer.component';

describe('BhnFooterComponent', () => {
  let component: BhnFooterComponent;
  let fixture: ComponentFixture<BhnFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
