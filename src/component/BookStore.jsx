import React, { useState } from "react";

export default function Books() {
  const [book, setBook] = useState({
    isbn: "",
    title: "",
    author: "",
    price: "",
  });

  const [books, setBooks] = useState([]);

  const addBook = () => {
    setBooks([...books, book]);

    setBook({
      isbn: "",
      title: "",
      author: "",
      price: "",
    });
  };

  return (
    <div>
      <h2>Book Management</h2>

      ISBN:
      <input
        type="text"
        value={book.isbn}
        onChange={(e) => setBook({ ...book, isbn: e.target.value })}
      />
      <br /><br />

      Title:
      <input
        type="text"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />
      <br /><br />

      Author:
      <input
        type="text"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />
      <br /><br />

      Price:
      <input
        type="text"
        value={book.price}
        onChange={(e) => setBook({ ...book, price: e.target.value })}
      />
      <br /><br />

      <button onClick={addBook}>Add Book</button>

      <hr />

     <button onClick={viewBooks}>View Books</button>

      {books.map((b, index) => (
        <p key={index}>
          {b.isbn} - {b.title} - {b.author} - ₹{b.price}
        </p>
      ))}
    </div>
  );
}
