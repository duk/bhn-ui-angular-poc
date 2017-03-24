import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnBoxComponent } from './bhn-box.component';

describe('BhnBoxComponent', () => {
  let component: BhnBoxComponent;
  let fixture: ComponentFixture<BhnBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
