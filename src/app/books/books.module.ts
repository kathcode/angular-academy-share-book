// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

// Components
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookListComponent } from './components/book-list/book-list.component';

// Share components
import { BookDetailComponent } from './components/book-detail/book-detail.component';

@NgModule({
  declarations: [BookCreateComponent, BookListComponent, BookDetailComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule, FormsModule],
  exports: [BookCreateComponent, BookListComponent],
})
export class BooksModule {}
