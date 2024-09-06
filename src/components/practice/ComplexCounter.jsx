import { Fragment, useState } from "react";

const booksData = [
  {
    id: "01",
    name: "Biology",
  },
  {
    id: "02",
    name: "Higher Math",
  },
  {
    id: "03",
    name: "Physics",
  },
];
export default function ComplexCounter() {
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState("");

  let nextId = booksData.length - 1;

  function handleSubmit(event) {
    event.preventDefault();
    setBooks([
        ...books,
        {
            id:(nextId++),
            name:bookName,
        }
    ])
    setBookName("")
  }
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          value={bookName}
          onChange={(event) => setBookName(event.target.value)}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Book List</h2>
      {books.map((book) => {
        const { id,name } = book;
        return <li key={id}>{name}</li>;
      })}
    </Fragment>
  );
}
