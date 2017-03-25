import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnProgressComponent } from './bhn-progress.component';

describe('BhnProgressComponent', () => {
  let component: BhnProgressComponent;
  let fixture: ComponentFixture<BhnProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
