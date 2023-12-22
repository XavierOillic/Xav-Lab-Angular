import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenDrawingsComponent } from './pen-drawings.component';

describe('PenDrawingsComponent', () => {
  let component: PenDrawingsComponent;
  let fixture: ComponentFixture<PenDrawingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenDrawingsComponent]
    });
    fixture = TestBed.createComponent(PenDrawingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
