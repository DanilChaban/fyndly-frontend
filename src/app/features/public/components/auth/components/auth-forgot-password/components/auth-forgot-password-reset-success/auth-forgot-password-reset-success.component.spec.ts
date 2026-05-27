import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordResetSuccessComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-reset-success/auth-forgot-password-reset-success.component';

describe('AuthForgotPasswordResetSuccessComponent', () => {
  let component: AuthForgotPasswordResetSuccessComponent;
  let fixture: ComponentFixture<AuthForgotPasswordResetSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthForgotPasswordResetSuccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthForgotPasswordResetSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
