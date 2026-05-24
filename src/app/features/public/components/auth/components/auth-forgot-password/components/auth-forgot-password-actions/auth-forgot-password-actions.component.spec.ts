import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordActionsComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-actions/auth-forgot-password-actions.component';

describe('AuthForgotPasswordActionsComponent', () => {
  let component: AuthForgotPasswordActionsComponent;
  let fixture: ComponentFixture<AuthForgotPasswordActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthForgotPasswordActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthForgotPasswordActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
