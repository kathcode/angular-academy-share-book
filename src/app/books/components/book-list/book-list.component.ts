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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs-E7SvsMUWxDH06wyfr9JkRkhxVFoATm3yQ&usqp=CAU',
    };
    this.addNewBook(newBook);
  }

  ngOnInit(): void {}

  addNewBook(book: IBook) {
    this.bookList = [...this.bookList, book];
    console.log(this.bookList);
  }
}
