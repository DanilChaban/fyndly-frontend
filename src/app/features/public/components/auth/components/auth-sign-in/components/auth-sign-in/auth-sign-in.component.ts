import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoPipe } from '@jsverse/transloco';
import { handleApiResourceState } from '@core/helpers/api/handle-api-resource-state';
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
  private readonly authService = inject(AuthService);
  private readonly flToastService = inject(FlToastService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private form: FormGroup = new FormGroup({});

  private queryParams$ = this.activatedRoute.queryParamMap.pipe(takeUntilDestroyed());

  constructor() {
    handleApiResourceState(this.authService.signIn.resource, {
      onSuccess: () => {
        this.flToastService.success(`global.validation.server_success.sign_in_success`);
      },

      onError: (errorCode, error) => {
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
    this.queryParams$.subscribe((params) => {
      if (params.has('error')) {
        const errorCode = params.get('error');
        this.flToastService.error(`global.validation.server_error.${errorCode}`);

        void this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: {},
        });
      }
    });
  }

  onSubmit(form: FormGroup): void {
    this.form = form;
    this.authService.signIn.execute(form.getRawValue());
  }
}
