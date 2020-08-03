import { Injectable } from '@angular/core';

import { IBook } from '../models/book.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksManagerService {
  bookList$ = new BehaviorSubject<IBook[]>([]);
  constructor() {}

  getBooks() {
    return this.bookList$.getValue();
  }

  addNewBook(newBook: IBook) {
    this.bookList$.next([...this.getBooks(), newBook]);
  }

  removeBook(indexPosition: number) {
    this.bookList$.next([
      ...this.getBooks().slice(0, indexPosition),
      ...this.getBooks().slice(indexPosition + 1, this.getBooks().length),
    ]);
  }

  getBookByPosition(indexPosition: number) {
    return this.getBooks()[indexPosition];
  }
}
