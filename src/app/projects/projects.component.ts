import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
  mlLink() {
    window.open("https://github.com/johnshizhu/john-ML")
  }
  fridgeLink() {
    window.open("https://github.com/johnshizhu/Fridge")
  }
  portfolioLink() {
    window.open("https://github.com/johnshizhu/Portfolio")
  }
  bioalgorithmsLink() {
    window.open("https://github.com/johnshizhu/jz-bioalgorithms")
  }
  hgtLink() {
    window.open("https://github.com/johnshizhu/HGT_Project")
  }
}
