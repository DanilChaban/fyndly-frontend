import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { SvgIconName } from '@core/icons/types/svg-icon-name';
import { FlCardSubtitleComponent } from '@common/fl-card/components/fl-card-subtitle/fl-card-subtitle.component';
import { FlCardTitleComponent } from '@common/fl-card/components/fl-card-title/fl-card-title.component';
import { FlCardHeaderComponent } from '@common/fl-card/components/fl-card-header/fl-card-header.component';
import { AuthForgotPasswordIconStatusComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-icon-status/auth-forgot-password-icon-status.component';

@Component({
  selector: 'app-auth-forgot-password-header',
  imports: [
    TranslocoPipe,
    FlCardSubtitleComponent,
    FlCardTitleComponent,
    FlCardHeaderComponent,
    AuthForgotPasswordIconStatusComponent,
  ],
  templateUrl: './auth-forgot-password-header.component.html',
  styleUrl: './auth-forgot-password-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordHeaderComponent {
  icon = input<SvgIconName | null>(null);
  title = input<string | null>(null);
  description = input<string | null>(null);
}
