import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Models
import { IBook } from '../../models/book.interface';

// Services
import { BooksManagerService } from '../../services/books-manager.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  @Input() book: IBook;

  constructor(
    private route: ActivatedRoute,
    private bookManagerService: BooksManagerService
  ) {}

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('id');
    this.book = this.bookManagerService.getBookByPosition(parseInt(index, 10));
  }
}
