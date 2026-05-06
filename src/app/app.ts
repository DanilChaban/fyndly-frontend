import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fl-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
  styleUrl: './app.scss',
})
export class App {}
