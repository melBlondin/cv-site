import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLink],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class Cv {
  menuHidden: boolean = true;
  aproposHidden: boolean = true;
  parcoursHidden: boolean = true;
  plusHidden: boolean = true;
  contactHidden: boolean = true;
  explanationRequestRea1: Boolean = false;
  explanationRequestRea2: Boolean = false;
  explanationRequestRea3: Boolean = false;

  aproposElement = viewChild<ElementRef<HTMLElement>>('focusApropos');
  parcoursElement = viewChild<ElementRef<HTMLElement>>('focusParcours');
  headerElement = viewChild<ElementRef<HTMLElement>>('header');
  realisationsElement = viewChild<ElementRef<HTMLElement>>('focusRealisations');
  contactElement = viewChild<ElementRef<HTMLElement>>('focusContact');

  private router = inject(Router);

  showMenu(): void {
    this.menuHidden = !this.menuHidden;
  }

  showApropos(): void {
    this.aproposHidden = !this.aproposHidden;
    if (!this.aproposHidden) {
      const element = this.aproposElement();
      setTimeout(() => element?.nativeElement.scrollIntoView(), 100);
    }
  }
  showParcours(): void {
    this.parcoursHidden = !this.contactHidden;
    if (!this.parcoursHidden) {
      const element = this.parcoursElement();
      setTimeout(() => element?.nativeElement.scrollIntoView(), 100);
    }
  }
  showContact(): void {
    this.contactHidden = !this.contactHidden;
  }
  showPlus(): void {
    this.plusHidden = !this.plusHidden;
  }

  showRealisations(): void {
    const element = this.realisationsElement();
    element?.nativeElement.scrollIntoView();
  }

  showContactButton(): void {
    const element = this.contactElement();
    element?.nativeElement.scrollIntoView();
  }

  closeParcours(): void {
    this.parcoursHidden = true;
    const element = this.headerElement();
    element?.nativeElement.scrollIntoView();
  }
  closeApropos(): void {
    this.aproposHidden = true;
    const element = this.headerElement();
    element?.nativeElement.scrollIntoView();
  }

  explanationRequest(realisation: string): void {
    switch (realisation) {
      case 'rea1':
        this.explanationRequestRea1 = true;
        break;
      case 'rea2':
        this.explanationRequestRea2 = true;
        break;
      case 'rea3':
        this.explanationRequestRea3 = true;
        break;
    }
  }

  explanationRequestOver(realisation: string): void {
    switch (realisation) {
      case 'rea1':
        this.explanationRequestRea1 = false;
        break;
      case 'rea2':
        this.explanationRequestRea2 = false;
        break;
        break;
      case 'rea3':
        this.explanationRequestRea3 = false;
        break;
    }
  }
}
