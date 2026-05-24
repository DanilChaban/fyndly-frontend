import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordResetComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-reset/auth-forgot-password-reset.component';

describe('AuthForgotPasswordResetComponent', () => {
  let component: AuthForgotPasswordResetComponent;
  let fixture: ComponentFixture<AuthForgotPasswordResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthForgotPasswordResetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthForgotPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
