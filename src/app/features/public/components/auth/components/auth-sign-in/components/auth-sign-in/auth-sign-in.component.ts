import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoPipe } from '@jsverse/transloco';
import { handleApiResourceState } from '@core/helpers/api/handle-api-resource-state';
import { ApiErrorCode } from '@core/types/api/api-error-code';
import { setServerValidationErrors } from '@core/helpers/set-server-validation-errors';
import { FlToastService } from '@ui/fl-toast/services/fl-toast.service';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardHeaderComponent } from '@common/fl-card/components/fl-card-header/fl-card-header.component';
import { FlCardTitleComponent } from '@common/fl-card/components/fl-card-title/fl-card-title.component';
import { FlCardSubtitleComponent } from '@common/fl-card/components/fl-card-subtitle/fl-card-subtitle.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { FlCardActionsComponent } from '@common/fl-card/components/fl-card-actions/fl-card-actions.component';
import { AuthService } from '@auth/apis/auth.service';
import { AuthSignInFormComponent } from '@auth/components/auth-sign-in/components/forms/auth-sign-in-form/auth-sign-in-form.component';
import { AuthActionsSwitchComponent } from '@auth/common/actions/auth-actions-switch/auth-actions-switch.component';
import { SessionStorageVerificationService } from '@auth/services/session-storage-verification.service';
import { SessionStorageResetPasswordService } from '@auth/services/session-storage-reset-password.service';

@Component({
  selector: 'app-auth-sign-in',
  imports: [
    TranslocoPipe,
    FlCardComponent,
    FlCardHeaderComponent,
    FlCardTitleComponent,
    FlCardSubtitleComponent,
    FlCardContentComponent,
    FlCardActionsComponent,
    AuthActionsSwitchComponent,
    AuthSignInFormComponent,
  ],
  templateUrl: './auth-sign-in.component.html',
  styleUrl: './auth-sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly flToastService = inject(FlToastService);
  private readonly authService = inject(AuthService);
  private readonly sessionStorageVerificationService = inject(SessionStorageVerificationService);
  private readonly sessionStorageResetPasswordService = inject(SessionStorageResetPasswordService);

  private form: FormGroup = new FormGroup({});

  private queryParams$ = this.activatedRoute.queryParamMap.pipe(takeUntilDestroyed());

  showUnverifiedWarning = signal(false);
  email = signal('');

  constructor() {
    handleApiResourceState(this.authService.signIn.resource, {
      onSuccess: () => {
        this.flToastService.success(`global.validation.server_success.sign_in_success`);
      },
      onError: (errorCode, error) => {
        this.showWarning(errorCode);
        this.setVerificationEmailToSessionStorage(errorCode);
        if (errorCode) {
          this.flToastService.error(`global.validation.server_error.${errorCode}`);
        } else {
          setServerValidationErrors(this.form, error.error.fields);
        }
      },
      onReset: () => {
        this.authService.signIn.reset();
      },
    });
  }

  ngOnInit(): void {
    this.subscribeToGoogleParams();
    this.sessionStorageVerificationService.clearData();
    this.sessionStorageResetPasswordService.clearData();
  }

  onSubmit(form: FormGroup): void {
    this.form = form;
    this.authService.signIn.execute(form.getRawValue());
  }

  private subscribeToGoogleParams(): void {
    this.queryParams$.subscribe((params) => {
      if (params.has('error')) {
        const errorCode = params.get('error') as ApiErrorCode;
        const email = params.get('email');
        this.showWarning(errorCode);
        this.setVerificationEmailToSessionStorage(errorCode, email);
        this.flToastService.error(`global.validation.server_error.${errorCode}`);

        void this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: {},
        });
      }
    });
  }

  private showWarning(errorCode: ApiErrorCode): void {
    this.showUnverifiedWarning.set(errorCode === 'email_not_verified');
  }

  private setVerificationEmailToSessionStorage(errorCode: ApiErrorCode, email?: string | null): void {
    const isEmailNotVerified = errorCode === 'email_not_verified';
    const verificationEmail = email ?? this.form.getRawValue().email;

    if (isEmailNotVerified && verificationEmail) {
      this.email.set(verificationEmail);
    }
  }
}
