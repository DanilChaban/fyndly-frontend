import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlFormInputComponent } from '@ui/fl-form/components/fl-form-input/components/fl-form-input/fl-form-input.component';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { FlFormCheckboxComponent } from '@ui/fl-form/components/tr-form-checkbox/components/fl-form-checkbox/fl-form-checkbox.component';
import { AuthUiDividerComponent } from '@auth/common/ui/auth-ui-divider/auth-ui-divider.component';

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
  ],
  templateUrl: './auth-sign-in-form.component.html',
  styleUrl: './auth-sign-in-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInFormComponent {
  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    email: [''],
    password: [''],
    rememberMe: [true],
  });

  onSubmit(): void {
    console.log(this.form.value);
  }
}
