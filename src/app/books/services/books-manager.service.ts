import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

// Models
import { IBook } from '../models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksManagerService {
  bookList$ = new BehaviorSubject<Array<IBook>>([]);
  constructor(private fireStore: AngularFirestore) {
    fireStore
      .collection('books')
      .valueChanges()
      .subscribe((books: Array<IBook>) => {
        this.bookList$.next(books);
      });
  }

  addNewBook(newBook: IBook) {
    this.fireStore.collection('books').add(newBook);
  }

  removeBook(indexPosition: string) {
    // DOC: get document path
    this.fireStore.collection('books').doc(indexPosition).delete();
  }

  getBookByPosition(indexPosition: number) {
    return this.bookList$.getValue()[indexPosition];
  }

  getBookByName(name: string) {
    this.fireStore
      .collection('books', (ref) => ref.where('name', '==', name + '\uf8ff'))
      .valueChanges()
      .subscribe((books: IBook[]) => {
        this.bookList$.next(books);
      });
  }
}
