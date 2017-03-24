import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnMessageComponent } from './bhn-message.component';

describe('BhnMessageComponent', () => {
  let component: BhnMessageComponent;
  let fixture: ComponentFixture<BhnMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
