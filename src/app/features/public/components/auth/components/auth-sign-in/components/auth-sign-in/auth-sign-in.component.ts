import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardHeaderComponent } from '@common/fl-card/components/fl-card-header/fl-card-header.component';
import { FlCardTitleComponent } from '@common/fl-card/components/fl-card-title/fl-card-title.component';
import { FlCardSubtitleComponent } from '@common/fl-card/components/fl-card-subtitle/fl-card-subtitle.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { FlCardActionsComponent } from '@common/fl-card/components/fl-card-actions/fl-card-actions.component';
import { AuthSignInFormComponent } from '@auth/components/auth-sign-in/components/forms/auth-sign-in-form/auth-sign-in-form.component';
import { AuthActionsSwitchComponent } from '@auth/common/actions/auth-actions-switch/auth-actions-switch.component';
import { AuthService } from '@auth/apis/auth.service';

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
export class AuthSignInComponent {
  private readonly authService = inject(AuthService);

  onSubmit(form: FormGroup): void {
    this.authService.signIn.execute(form.getRawValue());
  }
}
