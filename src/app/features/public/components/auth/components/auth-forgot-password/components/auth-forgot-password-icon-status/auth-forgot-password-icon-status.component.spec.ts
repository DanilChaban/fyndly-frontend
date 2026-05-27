import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordIconStatusComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-icon-status/auth-forgot-password-icon-status.component';

describe('AuthForgotPasswordIconStatusComponent', () => {
  let component: AuthForgotPasswordIconStatusComponent;
  let fixture: ComponentFixture<AuthForgotPasswordIconStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthForgotPasswordIconStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthForgotPasswordIconStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
