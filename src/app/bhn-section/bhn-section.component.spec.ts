import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnSectionComponent } from './bhn-section.component';

describe('BhnSectionComponent', () => {
  let component: BhnSectionComponent;
  let fixture: ComponentFixture<BhnSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
