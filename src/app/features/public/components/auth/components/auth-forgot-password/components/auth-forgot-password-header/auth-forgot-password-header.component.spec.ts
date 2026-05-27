import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordHeaderComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-header/auth-forgot-password-header.component';

describe('AuthForgotPasswordHeaderComponent', () => {
  let component: AuthForgotPasswordHeaderComponent;
  let fixture: ComponentFixture<AuthForgotPasswordHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthForgotPasswordHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthForgotPasswordHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
