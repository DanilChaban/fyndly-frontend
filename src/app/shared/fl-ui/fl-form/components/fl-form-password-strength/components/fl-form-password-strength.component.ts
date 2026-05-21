import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslocoPipe } from '@jsverse/transloco';
import {
  getPasswordStrength,
  getPasswordStrengthBars,
  getPasswordStrengthLabel,
  getPasswordStrengthScore,
} from '@ui/fl-form/components/fl-form-password-strength/utils/utils';

@Component({
  selector: 'fl-form-password-strength',
  imports: [NgClass, TranslocoPipe],
  templateUrl: './fl-form-password-strength.component.html',
  styleUrl: './fl-form-password-strength.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlFormPasswordStrengthComponent {
  password = input<string | null>('');

  value = computed(() => this.password() ?? '');

  bars = Array.from({ length: 4 }, (_, index) => index);

  hasPassword = computed(() => this.value().length > 0);
  score = computed(() => getPasswordStrengthScore(this.value()));
  strength = computed(() => getPasswordStrength(this.score()));
  activeBars = computed(() => getPasswordStrengthBars(this.strength()));
  label = computed(() => getPasswordStrengthLabel(this.strength()));
  strengthClass = computed(() => `fl-form-password-strength--${this.strength()}`);
}
