import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalDrawingsComponent } from './digital-drawings.component';

describe('DigitalDrawingsComponent', () => {
  let component: DigitalDrawingsComponent;
  let fixture: ComponentFixture<DigitalDrawingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalDrawingsComponent]
    });
    fixture = TestBed.createComponent(DigitalDrawingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
