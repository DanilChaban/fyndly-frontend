import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailVerificationResendCodeComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-resend-code/auth-email-verification-resend-code.component';

describe('AuthEmailVerificationResendCodeComponent', () => {
  let component: AuthEmailVerificationResendCodeComponent;
  let fixture: ComponentFixture<AuthEmailVerificationResendCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailVerificationResendCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailVerificationResendCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
