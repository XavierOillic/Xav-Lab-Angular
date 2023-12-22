import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenPortraitsComponent } from './pen-portraits.component';

describe('PenPortraitsComponent', () => {
  let component: PenPortraitsComponent;
  let fixture: ComponentFixture<PenPortraitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenPortraitsComponent]
    });
    fixture = TestBed.createComponent(PenPortraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
