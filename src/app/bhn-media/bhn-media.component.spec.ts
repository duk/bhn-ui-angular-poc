import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnMediaComponent } from './bhn-media.component';

describe('BhnMediaComponent', () => {
  let component: BhnMediaComponent;
  let fixture: ComponentFixture<BhnMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
