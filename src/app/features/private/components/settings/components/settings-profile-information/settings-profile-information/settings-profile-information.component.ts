import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { UserService } from '@core/services/api/user.service';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardHeaderComponent } from '@common/fl-card/components/fl-card-header/fl-card-header.component';
import { FlCardSubtitleComponent } from '@common/fl-card/components/fl-card-subtitle/fl-card-subtitle.component';
import { FlCardTitleComponent } from '@common/fl-card/components/fl-card-title/fl-card-title.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { FlCardActionsComponent } from '@common/fl-card/components/fl-card-actions/fl-card-actions.component';
import { SettingsProfileInformationProfileComponent } from '@settings/components/settings-profile-information/settings-profile-information-profile/settings-profile-information-profile.component';
import { SettingsProfileInformationCoverPhotoComponent } from '@settings/components/settings-profile-information/settings-profile-information-cover-photo/settings-profile-information-cover-photo.component';

@Component({
  selector: 'app-settings-profile-information',
  imports: [
    TranslocoPipe,
    FlCardComponent,
    FlCardHeaderComponent,
    FlCardSubtitleComponent,
    FlCardTitleComponent,
    FlCardContentComponent,
    FlCardActionsComponent,
    SettingsProfileInformationProfileComponent,
    SettingsProfileInformationCoverPhotoComponent,
  ],
  templateUrl: './settings-profile-information.component.html',
  styleUrl: './settings-profile-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsProfileInformationComponent {
  private readonly userService = inject(UserService);

  user = this.userService.user.value;
}
