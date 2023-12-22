import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalDrawingsPageComponent } from './digital-drawings-page.component';

describe('DigitalDrawingsPageComponent', () => {
  let component: DigitalDrawingsPageComponent;
  let fixture: ComponentFixture<DigitalDrawingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalDrawingsPageComponent]
    });
    fixture = TestBed.createComponent(DigitalDrawingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
