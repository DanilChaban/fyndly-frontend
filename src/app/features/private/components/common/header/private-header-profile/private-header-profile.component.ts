import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { UserService } from '@core/services/api/user.service';

@Component({
  selector: 'app-private-header-profile',
  imports: [],
  templateUrl: './private-header-profile.component.html',
  styleUrl: './private-header-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateHeaderProfileComponent {
  private readonly userService = inject(UserService);

  user = this.userService.me.value;

  imageName = computed(() => this.user()?.username?.slice(0, 2).toUpperCase());
}
