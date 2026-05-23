import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailVerificationActionsContinueComponent } from '@auth/components/auth-email-verification/components/actions/auth-email-verification-actions-continue/auth-email-verification-actions-continue.component';

describe('AuthEmailVerificationActionsContinueComponent', () => {
  let component: AuthEmailVerificationActionsContinueComponent;
  let fixture: ComponentFixture<AuthEmailVerificationActionsContinueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailVerificationActionsContinueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailVerificationActionsContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
