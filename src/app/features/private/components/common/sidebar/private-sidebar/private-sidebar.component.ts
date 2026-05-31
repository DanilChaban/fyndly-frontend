import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { SIDEBAR_SECTIONS } from '@private/components/common/sidebar/constants/private-sidebar-sections';

@Component({
  selector: 'app-private-sidebar',
  imports: [RouterLink, RouterLinkActive, MatIcon, TranslocoPipe],
  templateUrl: './private-sidebar.component.html',
  styleUrl: './private-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateSidebarComponent {
  private readonly translocoService = inject(TranslocoService);

  activeLang = this.translocoService.activeLang;

  sections = SIDEBAR_SECTIONS;
}
