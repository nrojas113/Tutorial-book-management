import React from "react";
//lodash is a library that provides utility functions
import _ from "lodash";
import Book from "./Book";

const BookList = (props) => {
  const { books, setBooks } = props;
  const handleRemoveBook = (id) => {
    //if delete button is clicked (Book Component),
    //remove the book with the selected book id
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    // Fragment let you group a list of children without adding extra nodes to the DOM
    //shorter syntax for this is just add <> </> in that case can't pass props
    <React.Fragment>
      <div className="book-list">
        {/* if books is NOT empty, map through the bookx array and render Book component */}
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BookList;
