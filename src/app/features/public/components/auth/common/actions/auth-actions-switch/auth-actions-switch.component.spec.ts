import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthActionsSwitchComponent } from '@auth/common/actions/auth-actions-switch/auth-actions-switch.component';

describe('AuthActionsSwitchComponent', () => {
  let component: AuthActionsSwitchComponent;
  let fixture: ComponentFixture<AuthActionsSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthActionsSwitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthActionsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
