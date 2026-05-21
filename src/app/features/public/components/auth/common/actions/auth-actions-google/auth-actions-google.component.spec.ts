import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthActionsGoogleComponent } from '@auth/common/actions/auth-actions-google/auth-actions-google.component';

describe('AuthActionsGoogleComponent', () => {
  let component: AuthActionsGoogleComponent;
  let fixture: ComponentFixture<AuthActionsGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthActionsGoogleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthActionsGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
