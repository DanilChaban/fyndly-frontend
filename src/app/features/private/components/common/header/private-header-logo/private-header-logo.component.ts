import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-private-header-logo',
  imports: [RouterLink],
  templateUrl: './private-header-logo.component.html',
  styleUrl: './private-header-logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateHeaderLogoComponent {}
