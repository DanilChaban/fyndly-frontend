import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordFormComponent } from '@auth/components/auth-forgot-password/components/forms/auth-forgot-password-form/auth-forgot-password-form.component';

describe('AuthForgotPasswordFormComponent', () => {
  let component: AuthForgotPasswordFormComponent;
  let fixture: ComponentFixture<AuthForgotPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthForgotPasswordFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthForgotPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
