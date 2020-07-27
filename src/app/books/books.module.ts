import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [BookAddComponent, BookListComponent],
  imports: [CommonModule],
  exports: [BookAddComponent, BookListComponent],
})
export class BooksModule {}
