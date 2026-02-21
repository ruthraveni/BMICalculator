import React, { useState } from "react";

function Book() {
 
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const [books, setBooks] = useState([]);

  const addBook = () => {
    const newBook = { isbn, title, author, price };

    setBooks([...books, newBook]);

    setIsbn("");
    setTitle("");
    setAuthor("");
    setPrice("");
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2> BookStore Management</h2>
      <div>
        <p>
          ISBN:{" "}
          <input
            type="text" value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </p>
      <p>
          Title:{" "}
          <input  type="text" value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          Author:{" "}
          <input type="text"  value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </p>
  <p>
          Price:{" "}
          <input type="text"  value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>
        <button onClick={addBook}>Add Book</button>
      </div>

      <hr />

      <h3> View Books</h3>

        <table border="1" Padding="10">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {books.map((b, index) => (
              <tr key={index}>
                <td>{b.isbn}</td>
                <td>{b.title}</td>
                <td>{b.author}</td>
                <td>{b.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

    </div>
  );
}

export default Book;
