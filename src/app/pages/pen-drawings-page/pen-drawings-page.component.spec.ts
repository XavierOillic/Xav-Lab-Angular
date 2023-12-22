import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenDrawingsPageComponent } from './pen-drawings-page.component';

describe('PenDrawingsPageComponent', () => {
  let component: PenDrawingsPageComponent;
  let fixture: ComponentFixture<PenDrawingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenDrawingsPageComponent]
    });
    fixture = TestBed.createComponent(PenDrawingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
