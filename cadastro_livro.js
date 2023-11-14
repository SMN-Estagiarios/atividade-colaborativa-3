const register_book = (title, author, isbn) => {
  const book = {
    id: isbn + title,
    author: author,
    isbn: isbn,
  };

  return book;
};

register_book("A Cabana", "William P. Young", "98765425");
