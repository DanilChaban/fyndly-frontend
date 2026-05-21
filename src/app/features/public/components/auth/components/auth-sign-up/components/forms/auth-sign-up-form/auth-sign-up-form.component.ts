import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlFormInputComponent } from '@ui/fl-form/components/fl-form-input/components/fl-form-input/fl-form-input.component';
import { FlFormPasswordStrengthComponent } from '@ui/fl-form/components/fl-form-password-strength/components/fl-form-password-strength.component';
import { AuthUiDividerComponent } from '@auth/common/ui/auth-ui-divider/auth-ui-divider.component';
import { AuthActionsGoogleComponent } from '@auth/common/actions/auth-actions-google/auth-actions-google.component';

@Component({
  selector: 'app-auth-sign-up-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslocoPipe,
    FlButtonComponent,
    FlFormComponent,
    FlFormInputComponent,
    FlFormPasswordStrengthComponent,
    AuthUiDividerComponent,
    AuthActionsGoogleComponent,
  ],
  templateUrl: './auth-sign-up-form.component.html',
  styleUrl: './auth-sign-up-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignUpFormComponent {
  submitClicked = output<FormGroup>();

  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  onSubmit(): void {
    this.submitClicked.emit(this.form);
  }
}
