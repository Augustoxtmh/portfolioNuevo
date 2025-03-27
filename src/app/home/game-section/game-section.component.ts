import { Component, OnInit } from '@angular/core';
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

  constructor(private bookGameService: BookGameService
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
    const audio = new Audio('../../../assets/Stardew_Valley_OST_-_Stardew_Valley_Overture_[_YouConvert.net_].mp3');
    audio.volume = 0.2;
    audio.play();
    this.ended = true;
  }
  
}
