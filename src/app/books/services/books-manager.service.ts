import { Injectable } from '@angular/core';

import { IBook } from '../models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksManagerService {
  bookList: IBook[] = [];
  constructor() {}

  getBooks() {
    return this.bookList;
  }

  addNewBook(newBook: IBook) {
    this.bookList = [...this.bookList, newBook];
  }

  removeBook(indexPosition: number) {
    this.bookList = [
      ...this.bookList.slice(0, indexPosition),
      ...this.bookList.slice(indexPosition + 1, this.bookList.length),
    ];
  }

  getBookByPosition(indexPosition: number) {
    return this.bookList[indexPosition];
  }
}
