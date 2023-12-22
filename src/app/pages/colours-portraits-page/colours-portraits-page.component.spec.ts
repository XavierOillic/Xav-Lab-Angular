import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoursPortraitsPageComponent } from './colours-portraits-page.component';

describe('ColoursPortraitsPageComponent', () => {
  let component: ColoursPortraitsPageComponent;
  let fixture: ComponentFixture<ColoursPortraitsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColoursPortraitsPageComponent]
    });
    fixture = TestBed.createComponent(ColoursPortraitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
