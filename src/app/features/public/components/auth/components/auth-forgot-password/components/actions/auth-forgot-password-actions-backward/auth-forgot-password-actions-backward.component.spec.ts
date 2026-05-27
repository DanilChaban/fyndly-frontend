import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordActionsBackwardComponent } from '@auth/components/auth-forgot-password/components/actions/auth-forgot-password-actions-backward/auth-forgot-password-actions-backward.component';

describe('AuthForgotPasswordActionsBackwardComponent', () => {
  let component: AuthForgotPasswordActionsBackwardComponent;
  let fixture: ComponentFixture<AuthForgotPasswordActionsBackwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthForgotPasswordActionsBackwardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthForgotPasswordActionsBackwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
