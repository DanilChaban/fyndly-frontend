import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrivateHeaderComponent } from '@private/components/common/header/private-header/private-header.component';
import { PrivateSidebarComponent } from '@private/components/common/sidebar/private-sidebar/private-sidebar.component';

@Component({
  selector: 'app-private',
  imports: [RouterOutlet, PrivateHeaderComponent, PrivateSidebarComponent],
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateComponent {}
