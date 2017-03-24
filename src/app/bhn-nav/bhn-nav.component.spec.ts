import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnNavComponent } from './bhn-nav.component';

describe('BhnNavComponent', () => {
  let component: BhnNavComponent;
  let fixture: ComponentFixture<BhnNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
