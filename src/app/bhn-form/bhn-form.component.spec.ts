import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnFormComponent } from './bhn-form.component';

describe('BhnFormComponent', () => {
  let component: BhnFormComponent;
  let fixture: ComponentFixture<BhnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
