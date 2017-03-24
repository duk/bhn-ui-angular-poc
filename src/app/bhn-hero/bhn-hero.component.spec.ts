import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhnHeroComponent } from './bhn-hero.component';

describe('BhnHeroComponent', () => {
  let component: BhnHeroComponent;
  let fixture: ComponentFixture<BhnHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhnHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhnHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
