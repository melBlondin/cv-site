import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-menu',
  imports: [TranslocoDirective],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

  showMenu : boolean=true;

  requestFromToggle():void{
    this.showMenu=!this.showMenu
  }
}
