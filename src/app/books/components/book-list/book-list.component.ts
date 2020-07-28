import { Component, OnInit } from '@angular/core';

// Models
import { IBook } from '../../models/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookList: IBook[] = [];

  constructor() {
    const newBook: IBook = {
      name: 'Brújula...',
      author: 'Diana Uribe',
      imageUrl:
        'https://www.elpais.com.co/files/article_content_half/uploads/2018/11/30/5c01cbc9ce581.jpeg',
    };
    this.addNewBook(newBook);
    this.addNewBook(newBook);
    this.addNewBook(newBook);
    this.addNewBook(newBook);
  }

  ngOnInit(): void {}

  addNewBook(book: IBook) {
    this.bookList = [...this.bookList, book];
    console.log(this.bookList);
  }
}
