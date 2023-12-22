import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileysComponent } from './smileys.component';

describe('SmileysComponent', () => {
  let component: SmileysComponent;
  let fixture: ComponentFixture<SmileysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmileysComponent]
    });
    fixture = TestBed.createComponent(SmileysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
