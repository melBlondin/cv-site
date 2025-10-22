import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TtsService } from './components/layout/components/tts/services/tts-services';
import { Cv } from './components/cv/cv';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('SBH');
}
