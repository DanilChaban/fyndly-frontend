import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-auth-actions-switch',
  imports: [FlButtonComponent],
  templateUrl: './auth-actions-switch.component.html',
  styleUrl: './auth-actions-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthActionsSwitchComponent {
  text = input<string>('');
  linkText = input<string>('');
  link = input<string>('');

  private readonly router = inject(Router);

  navigate(): void {
    void this.router.navigate([this.link()]);
  }
}
