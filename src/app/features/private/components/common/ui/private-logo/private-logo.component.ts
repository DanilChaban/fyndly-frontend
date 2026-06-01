import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-private-logo',
  imports: [RouterLink],
  templateUrl: './private-logo.component.html',
  styleUrl: './private-logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateLogoComponent {}
