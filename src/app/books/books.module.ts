// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookListComponent } from './components/book-list/book-list.component';

// Share module
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BookCreateComponent, BookListComponent],
  imports: [CommonModule, SharedModule],
  exports: [BookCreateComponent, BookListComponent],
})
export class BooksModule {}
