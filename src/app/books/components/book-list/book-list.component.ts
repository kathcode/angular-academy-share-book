import { Component, OnInit } from '@angular/core';

// Models
import { IBook } from '../../models/book.interface';

// Services
import { BooksManagerService } from '../../services/books-manager.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookList: IBook[] = [];

  constructor(private bookManagerService: BooksManagerService) {
    this.bookList = bookManagerService.getBooks();
  }

  ngOnInit(): void {}
}
