import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(
    private scrollService: ScrollService
  ) {
    scrollService.currentSection.subscribe(
      (res) => {
      }
    )
  }
}
