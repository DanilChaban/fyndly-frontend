import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailVerificationHeaderComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-header/auth-email-verification-header.component';

describe('AuthEmailVerificationHeaderComponent', () => {
  let component: AuthEmailVerificationHeaderComponent;
  let fixture: ComponentFixture<AuthEmailVerificationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailVerificationHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailVerificationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
