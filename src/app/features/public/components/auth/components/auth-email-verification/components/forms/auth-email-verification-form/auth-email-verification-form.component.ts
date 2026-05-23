import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlFormOtpInputComponent } from '@ui/fl-form/components/fl-form-otp-input/components/fl-form-otp-input/fl-form-otp-input.component';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-auth-email-verification-form',
  imports: [FlFormComponent, ReactiveFormsModule, FlFormOtpInputComponent, FlButtonComponent, TranslocoPipe],
  templateUrl: './auth-email-verification-form.component.html',
  styleUrl: './auth-email-verification-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationFormComponent {
  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    code: ['', [Validators.required]],
  });

  onSubmit(): void {
    console.log(this.form.value);
  }
}
