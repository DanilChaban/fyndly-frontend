import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignInFormComponent } from '@auth/components/auth-sign-in/components/forms/auth-sign-in-form/auth-sign-in-form.component';

describe('AuthSignInFormComponent', () => {
  let component: AuthSignInFormComponent;
  let fixture: ComponentFixture<AuthSignInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSignInFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
