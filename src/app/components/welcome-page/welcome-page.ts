import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  imports: [],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss'
})
export class WelcomePage implements OnInit{

  endSplashScreen:boolean=false;
  ngOnInit(): void {
    setTimeout(() => {
  this.endSplashScreen=true;
  console.log(this.endSplashScreen);
  },7000);


    
    
  }
}
