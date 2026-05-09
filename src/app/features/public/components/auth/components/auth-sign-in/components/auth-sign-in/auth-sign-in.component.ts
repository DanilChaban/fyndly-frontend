import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardHeaderComponent } from '@common/fl-card/components/fl-card-header/fl-card-header.component';
import { FlCardTitleComponent } from '@common/fl-card/components/fl-card-title/fl-card-title.component';
import { FlCardSubtitleComponent } from '@common/fl-card/components/fl-card-subtitle/fl-card-subtitle.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { AuthSignInFormComponent } from '@auth/components/auth-sign-in/components/forms/auth-sign-in-form/auth-sign-in-form.component';

@Component({
  selector: 'app-auth-sign-in',
  imports: [
    AuthSignInFormComponent,
    AuthSignInFormComponent,
    FlCardComponent,
    FlCardHeaderComponent,
    FlCardTitleComponent,
    FlCardSubtitleComponent,
    FlCardContentComponent,
  ],
  templateUrl: './auth-sign-in.component.html',
  styleUrl: './auth-sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInComponent {}
