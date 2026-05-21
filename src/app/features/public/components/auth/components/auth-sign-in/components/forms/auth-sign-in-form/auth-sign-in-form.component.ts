import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlFormInputComponent } from '@ui/fl-form/components/fl-form-input/components/fl-form-input/fl-form-input.component';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { FlFormCheckboxComponent } from '@ui/fl-form/components/tr-form-checkbox/components/fl-form-checkbox/fl-form-checkbox.component';
import { AuthUiDividerComponent } from '@auth/common/ui/auth-ui-divider/auth-ui-divider.component';
import { AuthActionsGoogleComponent } from '@auth/common/actions/auth-actions-google/auth-actions-google.component';

@Component({
  selector: 'app-auth-sign-in-form',
  imports: [
    ReactiveFormsModule,
    TranslocoPipe,
    FlFormComponent,
    FlFormInputComponent,
    FlButtonComponent,
    FlFormCheckboxComponent,
    AuthUiDividerComponent,
    AuthActionsGoogleComponent,
  ],
  templateUrl: './auth-sign-in-form.component.html',
  styleUrl: './auth-sign-in-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInFormComponent {
  submitClicked = output<FormGroup>();

  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  onSubmit(): void {
    this.submitClicked.emit(this.form);
  }
}
