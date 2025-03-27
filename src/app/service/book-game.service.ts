import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookGameService {

  private allBooks: string[] = [
    'Book 1',
    'Book 2',
    'Book 3',
    'Book 4',
    'Book 5',
    'Book 6',
    'Book 7',
    'Book 8',
    'Book 9'
  ];
  
  private librarySubject = new BehaviorSubject<string[]>([]);
  private endView = new BehaviorSubject<boolean>(false);

  library$ = this.librarySubject.asObservable();
  endView$ = this.endView.asObservable();

  getBooks() {
    return this.allBooks;
  }

  getLibrary() {
    return this.library$;
  }

  getEnd() {
    return this.endView$;
  }

  goEnd(bol: boolean){
    this.endView.next(bol);
  }

  addToLibrary(book: string): void {
    const currentLibrary = this.librarySubject.value;
    if (!currentLibrary.includes(book)) {
      currentLibrary.push(book);
      this.librarySubject.next(currentLibrary);
    }
  }
}
