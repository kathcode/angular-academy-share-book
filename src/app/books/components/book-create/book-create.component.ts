import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { BooksManagerService } from '../../services/books-manager.service';

// Models
import { IBook } from '../../models/book.interface';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements OnInit {
  name: string;
  author: string;
  imageUrl: string;

  constructor(
    private booksManagerService: BooksManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const newIndex = this.booksManagerService.bookList$.getValue().length;

    const newBook: IBook = {
      author: this.author,
      name: this.name,
      imageUrl: this.imageUrl,
      id: newIndex,
    };

    this.booksManagerService.addNewBook(newBook);
    this.router.navigate(['']);
  }
}
