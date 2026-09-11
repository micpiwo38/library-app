class Book {
  constructor(id, name, author, description, price, image) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.description = description;
    this.price = price;
    this.image = image;
  }
  displayBook = () => {
    console.log(Book.name);
  };
}
