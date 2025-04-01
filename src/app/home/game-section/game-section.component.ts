import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { BookGameService } from 'src/app/service/book-game.service';

@Component({
  selector: 'app-game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.css']
})

export class GameSectionComponent implements OnInit {
  books: string[] = [];
  library$: Observable<string[]>;
  ended: boolean = false;
  clicked: boolean = false;
  audio = new Audio();

  constructor(private bookGameService: BookGameService, private translate: TranslateService
  ) {
    this.library$ = this.bookGameService.getLibrary();
  }

  ngOnInit(): void {
    this.books = this.bookGameService.getBooks();
  }

  addToLibrary(book: string): void {
    this.bookGameService.addToLibrary(book);
  }

  ganaste() {
    this.audio = new Audio('../../../assets/Stardew_Valley_OST_-_Stardew_Valley_Overture_[_YouConvert.net_].mp3');
    this.audio.volume = 0.2;
    this.audio.play();
    this.translate.use('in');
    this.ended = true;
    this.clicked = true;
  }
  
  parar() {
    this.audio.pause();
    this.translate.use('es');
    this.ended = false;
    this.clicked = false
  }
}
