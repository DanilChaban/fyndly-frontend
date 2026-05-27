import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailVerificationEmailComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-email/auth-email-verification-email.component';

describe('AuthEmailVerificationEmailComponent', () => {
  let component: AuthEmailVerificationEmailComponent;
  let fixture: ComponentFixture<AuthEmailVerificationEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailVerificationEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailVerificationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
