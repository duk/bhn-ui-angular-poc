import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnPaginationComponent } from './bhn-pagination.component';

describe('BhnPaginationComponent', () => {
  let component: BhnPaginationComponent;
  let fixture: ComponentFixture<BhnPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
