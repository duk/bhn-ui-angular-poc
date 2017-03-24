import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnModalComponent } from './bhn-modal.component';

describe('BhnModalComponent', () => {
  let component: BhnModalComponent;
  let fixture: ComponentFixture<BhnModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
