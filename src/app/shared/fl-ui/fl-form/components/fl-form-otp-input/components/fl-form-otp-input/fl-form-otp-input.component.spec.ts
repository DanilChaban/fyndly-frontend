import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlFormOtpInputComponent } from '@ui/fl-form/components/fl-form-otp-input/components/fl-form-otp-input/fl-form-otp-input.component';

describe('FlFormOtpInputComponent', () => {
  let component: FlFormOtpInputComponent;
  let fixture: ComponentFixture<FlFormOtpInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlFormOtpInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlFormOtpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
