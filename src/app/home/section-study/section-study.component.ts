import { Component } from '@angular/core';
import { BookGameService } from 'src/app/service/book-game.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section-study',
  templateUrl: './section-study.component.html',
  styleUrls: ['./section-study.component.css']
})
export class SectionStudyComponent {
  actualPage: number = 0;
  seven: boolean = true;
  
  matrizEstudios: string[][] = [
    ['https://static.acaula.com.ar/center/AR/1328-instituto-argentino-de-estudios-superiores-iaes-9a28a03e-7797-4fc3-a1f2-8e7bdda79d1a-logo-200x200.png', 'study.iaes.institution', 'study.iaes.degree', 'study.iaes.description'],
    ['https://logodownload.org/wp-content/uploads/2020/11/pearson-logo-0.png', 'study.pearson.institution', 'study.pearson.degree', 'study.pearson.description'],
    ['https://campusvirtual.ing.unlpam.edu.ar/pluginfile.php/37478/coursecat/description/FONDO%20JPG-%20sin%20espacios.png', 'study.argentina_programa.institution', 'study.argentina_programa.degree', 'study.argentina_programa.description'],
    ['https://secure.meetupstatic.com/photos/event/4/c/b/b/600_468259643.jpeg', 'study.freecodecamp.institution', 'study.freecodecamp.degree', 'study.freecodecamp.description']
  ];
  

  estudios: string[][] = [];

  constructor(private bookGameService: BookGameService, private translate: TranslateService) {
    this.cambiarPagEstudios(0);
  }

  cambiarPagEstudios(par: number) {
    const itemsPerPage = 2;
    const maxPage = Math.ceil(this.matrizEstudios.length / 2) - 1;

    this.actualPage += par;

    if (this.actualPage < 0) {
      this.actualPage = maxPage;
    } else if (this.actualPage > maxPage) {
      this.actualPage = 0;
    }

    const startIndex = this.actualPage * itemsPerPage;
    this.estudios = this.matrizEstudios.slice(startIndex, startIndex + itemsPerPage);
  }

  tryGoToPrevious() {
    this.cambiarPagEstudios(-1);
  }

  tryGoToNext() {
    const totalItems = this.matrizEstudios.length;
    const maxPage = Math.ceil(totalItems / 2) - 1;
    this.cambiarPagEstudios(1);
  }

  getBook() {
    this.seven = false;
    this.bookGameService.addToLibrary('Book 7');
  }
}
