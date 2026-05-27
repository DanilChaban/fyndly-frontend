import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailVerificationIconStatusComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-icon-status/auth-email-verification-icon-status.component';

describe('AuthEmailVerificationIconStatusComponent', () => {
  let component: AuthEmailVerificationIconStatusComponent;
  let fixture: ComponentFixture<AuthEmailVerificationIconStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailVerificationIconStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailVerificationIconStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
