import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-settings-profile-information-profile',
  imports: [MatIcon, FlButtonComponent],
  templateUrl: './settings-profile-information-profile.component.html',
  styleUrl: './settings-profile-information-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsProfileInformationProfileComponent {
  profileUrl = input<string>();
}
