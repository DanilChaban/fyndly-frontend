import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicFooterComponent } from '@public/common/components/public-footer/public-footer.component';
import { PublicHeaderComponent } from '@public/common/components/public-header/public-header.component';

@Component({
  selector: 'app-public',
  imports: [RouterOutlet, PublicFooterComponent, PublicHeaderComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicComponent {}
