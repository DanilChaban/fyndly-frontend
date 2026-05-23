import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@auth/apis/auth.service';
import { AuthSessionStorageVerificationService } from '@auth/services/auth-session-storage-verification.service';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  providers: [AuthService, AuthSessionStorageVerificationService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {}
