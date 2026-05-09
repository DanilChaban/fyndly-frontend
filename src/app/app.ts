import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgIconService } from '@core/icons/services/svg-icon.service';

@Component({
  selector: 'fl-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
  styleUrl: './app.scss',
})
export class App {
  private readonly svgIconService = inject(SvgIconService);

  constructor() {
    this.svgIconService.registerIcons();
  }
}
