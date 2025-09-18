import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomePage } from '../welcome-page/welcome-page';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Menu } from './components/menu/menu';
import { Tts } from './components/tts/tts';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Menu, Footer, Tts],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
