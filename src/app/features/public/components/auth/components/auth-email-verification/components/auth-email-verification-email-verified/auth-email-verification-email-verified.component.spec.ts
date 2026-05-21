import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailVerificationEmailVerifiedComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-email-verified/auth-email-verification-email-verified.component';

describe('AuthEmailVerificationEmailVerifiedComponent', () => {
  let component: AuthEmailVerificationEmailVerifiedComponent;
  let fixture: ComponentFixture<AuthEmailVerificationEmailVerifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailVerificationEmailVerifiedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailVerificationEmailVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
