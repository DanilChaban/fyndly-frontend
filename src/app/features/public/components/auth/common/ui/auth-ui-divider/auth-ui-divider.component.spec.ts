import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUiDividerComponent } from '@auth/common/ui/auth-ui-divider/auth-ui-divider.component';

describe('AuthUiDividerComponent', () => {
  let component: AuthUiDividerComponent;
  let fixture: ComponentFixture<AuthUiDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthUiDividerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthUiDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
