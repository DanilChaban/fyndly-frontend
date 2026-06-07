import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsProfileInformationComponent } from '@settings/components/settings-profile-information/settings-profile-information.component';

@Component({
  selector: 'app-settings',
  imports: [SettingsProfileInformationComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {}
