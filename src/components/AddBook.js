import React from "react";
import BookForm from "./BookForm";

const AddBook = (props) => {
  const { history, books, setBooks } = props;
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
