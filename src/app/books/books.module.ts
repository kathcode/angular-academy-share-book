import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [BookCreateComponent, BookListComponent],
  imports: [CommonModule],
  exports: [BookCreateComponent, BookListComponent],
})
export class BooksModule {}
