import React, { useContext } from "react";
import BookForm from "./BookForm";
import { useParams } from "react-router-dom";
import BooksContext from "../context/BooksContext";

const EditBook = (props) => {
  const { history } = props;
  //get the books & setBooks through Context API
  const { books, setBooks } = useContext(BooksContext);

  //useParams allows you to access props.params.id from routes
  //identical as declaring {id} = props.match.params
  const { id } = useParams();
  //find particular book that matches the id & pass to BookForm
  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push("/");
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
