import { TestBed } from '@angular/core/testing';

import { BookGameService } from './book-game.service';

describe('BookGameService', () => {
  let service: BookGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
