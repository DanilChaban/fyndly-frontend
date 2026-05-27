import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { handleApiResourceState } from '@core/helpers/api/handle-api-resource-state';
import { setServerValidationErrors } from '@core/helpers/set-server-validation-errors';
import { FlToastService } from '@ui/fl-toast/services/fl-toast.service';
import { FlCardActionsComponent } from '@common/fl-card/components/fl-card-actions/fl-card-actions.component';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { FlCardHeaderComponent } from '@common/fl-card/components/fl-card-header/fl-card-header.component';
import { FlCardSubtitleComponent } from '@common/fl-card/components/fl-card-subtitle/fl-card-subtitle.component';
import { FlCardTitleComponent } from '@common/fl-card/components/fl-card-title/fl-card-title.component';
import { AuthService } from '@auth/apis/auth.service';
import { AuthActionsSwitchComponent } from '@auth/common/actions/auth-actions-switch/auth-actions-switch.component';
import { AuthSignUpFormComponent } from '@auth/components/auth-sign-up/components/forms/auth-sign-up-form/auth-sign-up-form.component';
import { SessionStorageVerificationService } from '@auth/services/session-storage-verification.service';

@Component({
  selector: 'app-auth-sign-up',
  imports: [
    TranslocoPipe,
    FlCardActionsComponent,
    FlCardComponent,
    FlCardContentComponent,
    FlCardHeaderComponent,
    FlCardSubtitleComponent,
    FlCardTitleComponent,
    AuthActionsSwitchComponent,
    AuthSignUpFormComponent,
  ],
  templateUrl: './auth-sign-up.component.html',
  styleUrl: './auth-sign-up.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignUpComponent {
  private readonly authService = inject(AuthService);
  private readonly flToastService = inject(FlToastService);
  private readonly localizedRouterService = inject(LocalizedRouterService);
  private readonly sessionStorageVerificationService = inject(SessionStorageVerificationService);

  private form: FormGroup = new FormGroup({});

  constructor() {
    handleApiResourceState(this.authService.signUp.resource, {
      onSuccess: () => {
        this.sessionStorageVerificationService.setData(this.form.getRawValue().email);
        this.flToastService.success(`global.validation.server_success.sign_up_success`);
        void this.localizedRouterService.navigate(['verify-email']);
      },
      onError: (_, error) => {
        setServerValidationErrors(this.form, error.error.fields);
      },
      onReset: () => {
        this.authService.signUp.reset();
      },
    });
  }

  onSubmit(form: FormGroup): void {
    this.form = form;
    this.authService.signUp.execute(form.getRawValue());
  }
}
