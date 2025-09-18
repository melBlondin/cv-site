import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TtsService {

    lang:string=localStorage.getItem('translocoLang') ||'es';

    // Creation of a group including language et flag to get only one observable and then on subscription from components
    languageSubject = new BehaviorSubject(this.lang);
    language$ = this.languageSubject.asObservable();

    /**To update the Observable value
     *
     * @param language  Selected languageand corresponding flag group
     */
    public updateSelectedLang(language: string) {
        this.languageSubject.next(language);
    }

}
