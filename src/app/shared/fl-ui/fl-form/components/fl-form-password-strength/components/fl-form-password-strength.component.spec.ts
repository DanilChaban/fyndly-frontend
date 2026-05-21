import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlFormPasswordStrengthComponent } from '@ui/fl-form/components/fl-form-password-strength/components/fl-form-password-strength.component';

describe('FlFormPasswordStrengthComponent', () => {
  let component: FlFormPasswordStrengthComponent;
  let fixture: ComponentFixture<FlFormPasswordStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlFormPasswordStrengthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlFormPasswordStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
