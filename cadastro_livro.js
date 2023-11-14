const cadastrar_livro = (title, author, isbn) => {
  const book = {
    id: isbn + title,
    author: author,
    isbn: isbn,
  };

  return book;
};

cadastrar_livro("Colheita Maldita", "Stephen King", "2587964");
