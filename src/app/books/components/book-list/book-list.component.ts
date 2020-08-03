import { Component, OnInit } from '@angular/core';

// Models
import { IBook } from '../../models/book.interface';

// Services
import { BooksManagerService } from '../../services/books-manager.service';
import { from, concat, Observable, BehaviorSubject } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

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

  ngOnInit(): void {
    this.operators();
    this.observables();
  }

  observables() {
    // Create an observable
    const observable = new Observable((subscriber) => {
      subscriber.next(100);
      subscriber.next(200);
      subscriber.next(300);
    });

    observable.subscribe((obs) => console.log(obs));

    // Nothify the last value
    const subjectBe = new BehaviorSubject(0);
    subjectBe.next(1);
    subjectBe.next(2);
    subjectBe.subscribe((n) => console.log('behab1', n));
    subjectBe.next(3);

    subjectBe.subscribe((n) => console.log('behab2', n));
  }

  operators() {
    // From: convert into an observable
    const numbers = from([12, 13, 14]);

    // Observable
    console.log(numbers);

    // Print numbers
    numbers.subscribe((num) => console.log(num));

    // Pipe: Receive  (map, filter, concat...)
    numbers.pipe().subscribe();

    // Map: Transform responses
    numbers
      .pipe(map((num) => num * num))
      .subscribe((n) => console.log('Map: ', n));

    // Filter: filter the response
    numbers
      .pipe(filter((num) => num === 12))
      .subscribe((n) => console.log('Filter by 12: ', n));

    // Take: return only the maximum observables that we set
    numbers.pipe(take(2)).subscribe((n) => console.log('Take: ', n));

    // Concat: concat all the observables
    const obs1 = from(['a', 'b', 'c']);
    const obs2 = from(['d', 'e', 'f']);

    concat(obs1, obs2).subscribe((res) => console.log(res));
  }
}
