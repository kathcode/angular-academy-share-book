import { Component, OnInit } from '@angular/core';

// Models
import { IBook } from '../../models/book.interface';

// Services
import { BooksManagerService } from '../../services/books-manager.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookList$ = new BehaviorSubject<IBook[]>([]);

  constructor(private bookManagerService: BooksManagerService) {
    bookManagerService.bookList$.subscribe((books) => {
      this.bookList$.next(books);
    });
  }

  ngOnInit(): void {}
}
