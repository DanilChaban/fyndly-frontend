import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailVerificationComponent } from '@auth/components/auth-email-verification/components/auth-email-verification/auth-email-verification.component';

describe('AuthEmailVerificationComponent', () => {
  let component: AuthEmailVerificationComponent;
  let fixture: ComponentFixture<AuthEmailVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailVerificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
