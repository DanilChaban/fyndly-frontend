import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@auth/apis/auth.service';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  providers: [AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {}
