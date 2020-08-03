import { BooksManagerService } from './books-manager.service';

describe('Book manager service test', () => {
  let service: BooksManagerService;

  beforeEach(() => {
    service = new BooksManagerService();
  });

  it('should add a new book', () => {
    const book = {
      name: 'Brújula',
      imageUrl: '',
      author: 'Diana uribe',
      id: 0,
    };
    service.addNewBook(book);

    expect(service.getBooks().length).toEqual(1);
  });

  it('should remove correctly an item', () => {
    const indexPosition = 1;
    const book1 = {
      name: 'Cien años de soledad',
      imageUrl: '',
      author: 'Gabriel García Marquez',
      id: 0,
    };
    const book2 = {
      name: 'Brújula',
      imageUrl: '',
      author: 'Diana uribe',
      id: 1,
    };
    service.addNewBook(book1);
    service.addNewBook(book2);
    service.removeBook(indexPosition);

    expect(service.getBooks().length).toBe(1);
  });

  it('should return books', () => {
    const book = {
      name: 'Brújula',
      imageUrl: '',
      author: 'Diana uribe',
      id: 0,
    };
    service.addNewBook(book);
    const expected = [book];

    expect(service.getBooks()).toEqual(expected);
  });

  it('should return the book in position 1', () => {
    const indexPosition = 0;
    const book1 = {
      name: 'Cien años de soledad',
      imageUrl: '',
      author: 'Gabriel García Marquez',
      id: 0,
    };
    const book2 = {
      name: 'Brújula',
      imageUrl: '',
      author: 'Diana uribe',
      id: 1,
    };
    service.addNewBook(book1);
    service.addNewBook(book2);
    const expected = book1;

    expect(service.getBookByPosition(indexPosition)).toEqual(expected);
  });
});
