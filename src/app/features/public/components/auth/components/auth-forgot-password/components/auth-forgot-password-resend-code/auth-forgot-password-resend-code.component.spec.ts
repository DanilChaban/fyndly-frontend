import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordResendCodeComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-resend-code/auth-forgot-password-resend-code.component';

describe('AuthForgotPasswordResendCodeComponent', () => {
  let component: AuthForgotPasswordResendCodeComponent;
  let fixture: ComponentFixture<AuthForgotPasswordResendCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthForgotPasswordResendCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthForgotPasswordResendCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
