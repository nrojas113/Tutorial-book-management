import React, { useContext } from "react";
import BookForm from "./BookForm";
import BooksContext from "../context/BooksContext";

const AddBook = (props) => {
  const { history } = props;
  //get the books & setBooks through Context API
  const { books, setBooks } = useContext(BooksContext);

  const handleOnSubmit = (book) => {
    //add the new book first & spread existing books - store in one array
    setBooks([book, ...books]);
    history.push("/");
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
