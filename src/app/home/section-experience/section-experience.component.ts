import { Component } from '@angular/core';
import { BookGameService } from 'src/app/service/book-game.service';

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.css']
})
export class SectionExperienceComponent {
  second: boolean = true;

  constructor(private bookGameServ: BookGameService) {}

  experiencias = [
    { logo: '', title: 'experience.projects.0.title', location_date: 'experience.projects.0.location_date', details: [
      'experience.projects.0.details.0', 'experience.projects.0.details.1', 'experience.projects.0.details.2'
    ] },
    { logo: '', title: 'experience.projects.1.title', location_date: 'experience.projects.1.location_date', details: [
      'experience.projects.1.details.0', 'experience.projects.1.details.1', 'experience.projects.1.details.2', 'experience.projects.1.details.3'
    ] },
    { logo: '', title: 'experience.projects.2.title', location_date: 'experience.projects.2.location_date', details: [
      'experience.projects.2.details.0', 'experience.projects.2.details.1', 'experience.projects.2.details.2', 'experience.projects.2.details.3'
    ] },
  ];

  getBook() {
    this.second = false;
    this.bookGameServ.addToLibrary('Book 2');
  }
}
