import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  imports: [TranslocoDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  path: string = 'sbh-global-view.jpeg';

  changeImg(imgName: string): void {
    this.path = imgName;
  }
}
