import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnTileComponent } from './bhn-tile.component';

describe('BhnTileComponent', () => {
  let component: BhnTileComponent;
  let fixture: ComponentFixture<BhnTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
