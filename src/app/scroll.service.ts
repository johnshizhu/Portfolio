import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  currentSection: BehaviorSubject<string> = new BehaviorSubject('home');

  constructor() { 
    document.addEventListener('scroll', () => {
      this.keepTrack();
    })
  }
  keepTrack() {
    const viewHeight = window.scrollY;
  }
}
