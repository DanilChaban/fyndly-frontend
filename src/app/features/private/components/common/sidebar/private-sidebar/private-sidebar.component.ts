import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-private-sidebar',
  imports: [],
  templateUrl: './private-sidebar.component.html',
  styleUrl: './private-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateSidebarComponent {}
