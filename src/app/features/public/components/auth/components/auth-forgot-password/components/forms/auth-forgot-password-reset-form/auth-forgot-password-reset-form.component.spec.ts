import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordResetFormComponent } from '@auth/components/auth-forgot-password/components/forms/auth-forgot-password-reset-form/auth-forgot-password-reset-form.component';

describe('AuthForgotPasswordResetFormComponent', () => {
  let component: AuthForgotPasswordResetFormComponent;
  let fixture: ComponentFixture<AuthForgotPasswordResetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthForgotPasswordResetFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthForgotPasswordResetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
