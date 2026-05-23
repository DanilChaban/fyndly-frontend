import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailVerificationFormComponent } from '@auth/components/auth-email-verification/components/forms/auth-email-verification-form/auth-email-verification-form.component';

describe('AuthEmailVerificationFormComponent', () => {
  let component: AuthEmailVerificationFormComponent;
  let fixture: ComponentFixture<AuthEmailVerificationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailVerificationFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailVerificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
