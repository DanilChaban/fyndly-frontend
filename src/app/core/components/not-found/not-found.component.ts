import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { ViewportService } from '@core/services/viewport.service';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-not-found',
  imports: [TranslocoPipe, FlButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  private readonly viewportService = inject(ViewportService);
  private readonly localizedRouterService = inject(LocalizedRouterService);

  isMobile = this.viewportService.isMobile;

  navigateToHome(): void {
    void this.localizedRouterService.navigate(['home']);
  }

  back(): void {
    window.history.back();
  }
}
