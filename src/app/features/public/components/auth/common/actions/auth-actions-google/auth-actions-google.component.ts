import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { apiUrl } from '@core/helpers/api/api-url';
import { API_ENDPOINTS } from '@core/constants/api-endpoints';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-auth-actions-google',
  imports: [FlButtonComponent, TranslocoPipe],
  templateUrl: './auth-actions-google.component.html',
  styleUrl: './auth-actions-google.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthActionsGoogleComponent {
  private readonly translocoService = inject(TranslocoService);

  lang = this.translocoService.activeLang;

  signInWithGoogle(): void {
    window.location.href = apiUrl(API_ENDPOINTS.auth.google, this.lang());
  }
}
