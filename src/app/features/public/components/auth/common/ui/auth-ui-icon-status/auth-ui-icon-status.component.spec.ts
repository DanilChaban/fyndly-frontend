import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUiIconStatusComponent } from '@auth/common/ui/auth-ui-icon-status/auth-ui-icon-status.component';

describe('AuthUiIconStatusComponent', () => {
  let component: AuthUiIconStatusComponent;
  let fixture: ComponentFixture<AuthUiIconStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthUiIconStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthUiIconStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
