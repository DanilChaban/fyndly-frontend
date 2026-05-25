import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SvgIconName } from '@core/icons/types/svg-icon-name';
import { AuthUiIconStatusComponent } from '@auth/common/ui/auth-ui-icon-status/auth-ui-icon-status.component';

@Component({
  selector: 'app-auth-forgot-password-icon-status',
  imports: [AuthUiIconStatusComponent],
  templateUrl: './auth-forgot-password-icon-status.component.html',
  styleUrl: './auth-forgot-password-icon-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordIconStatusComponent {
  iconName = input<SvgIconName | null>(null);
  showSuccess = input<boolean>(false);

  iconClass = computed(() => ({
    [`auth-ui-icon-status--success`]: this.showSuccess(),
  }));
}
