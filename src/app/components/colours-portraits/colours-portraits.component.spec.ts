import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoursPortraitsComponent } from './colours-portraits.component';

describe('ColoursPortraitsComponent', () => {
  let component: ColoursPortraitsComponent;
  let fixture: ComponentFixture<ColoursPortraitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColoursPortraitsComponent]
    });
    fixture = TestBed.createComponent(ColoursPortraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
