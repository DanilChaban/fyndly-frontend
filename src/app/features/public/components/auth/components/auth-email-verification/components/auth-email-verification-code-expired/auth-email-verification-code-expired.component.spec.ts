import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailVerificationCodeExpiredComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-code-expired/auth-email-verification-code-expired.component';

describe('AuthEmailVerificationCodeExpiredComponent', () => {
  let component: AuthEmailVerificationCodeExpiredComponent;
  let fixture: ComponentFixture<AuthEmailVerificationCodeExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailVerificationCodeExpiredComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailVerificationCodeExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
