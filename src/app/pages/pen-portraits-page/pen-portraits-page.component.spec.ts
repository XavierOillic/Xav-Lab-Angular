import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenPortraitsPageComponent } from './pen-portraits-page.component';

describe('PenPortraitsPageComponent', () => {
  let component: PenPortraitsPageComponent;
  let fixture: ComponentFixture<PenPortraitsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenPortraitsPageComponent]
    });
    fixture = TestBed.createComponent(PenPortraitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
