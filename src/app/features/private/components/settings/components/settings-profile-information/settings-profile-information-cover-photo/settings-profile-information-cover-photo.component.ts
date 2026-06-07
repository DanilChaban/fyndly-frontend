import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-settings-profile-information-cover-photo',
  imports: [FlButtonComponent, TranslocoPipe],
  templateUrl: './settings-profile-information-cover-photo.component.html',
  styleUrl: './settings-profile-information-cover-photo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsProfileInformationCoverPhotoComponent {}
