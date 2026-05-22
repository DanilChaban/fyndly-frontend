import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignInUnverifiedAccountComponent } from '@auth/components/auth-sign-in/components/auth-sign-in-unverified-account/auth-sign-in-unverified-account.component';

describe('AuthSignInUnverifiedAccountComponent', () => {
  let component: AuthSignInUnverifiedAccountComponent;
  let fixture: ComponentFixture<AuthSignInUnverifiedAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSignInUnverifiedAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSignInUnverifiedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
