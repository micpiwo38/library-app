class Loan {
  constructor(id, book_name, book_borrow_status) {
    this.id = id;
    this.book_name = book_name;
    this.book_borrow_status = book_borrow_status;
  }

  isBorrow(book_borrow_status) {
    const book_status = book_borrow_status ? true : false;
    return book_status;
  }
}
