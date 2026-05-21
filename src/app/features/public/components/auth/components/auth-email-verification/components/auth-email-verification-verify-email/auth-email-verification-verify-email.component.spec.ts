import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailVerificationVerifyEmailComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-verify-email/auth-email-verification-verify-email.component';

describe('AuthEmailVerificationVerifyEmailComponent', () => {
  let component: AuthEmailVerificationVerifyEmailComponent;
  let fixture: ComponentFixture<AuthEmailVerificationVerifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailVerificationVerifyEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailVerificationVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
