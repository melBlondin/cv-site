import { Component, inject, Inject, OnInit } from '@angular/core';
import { Languages } from './interfaces/languages-interface';
import { TranslocoService } from '@jsverse/transloco';
import { TtsService } from './services/tts-services';

@Component({
  selector: 'app-tts',
  imports: [],
  templateUrl: './tts.html',
  styleUrl: './tts.scss'
})
export class Tts implements OnInit{

  currentLang?:string;
  language1:string="fr-flag.png";
  language2:string="en-flag.png";
  isRequestMenu:boolean=true;
  ttsService=inject(TtsService);
  ttsLanguage: string='';

  languages:Languages[]=[
    {
      name : "es-flag.png",
    },
        {
      name : "en-flag.png",
    },
        {
      name : "fr-flag.png",
    }
  ];

  constructor(private service : TranslocoService){}

     ngOnInit(): void {
        this.ttsService.language$.subscribe(
        langue  => this.ttsLanguage = langue
        );
        this.currentLang = this.ttsLanguage + "-flag.png" ;
       }

  selectLanguage(lang:string):void{   
    lang=lang.slice(0,2);
    this.ttsService.updateSelectedLang(lang);
    this.service.setActiveLang(lang);
    localStorage.setItem('translocoLang',lang)
    this.currentLang=lang+ "-flag.png" ;
}

  toggleLanguage():void{
    this.isRequestMenu=!this.isRequestMenu;
  }

}
