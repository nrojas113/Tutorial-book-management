import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BooksList from "../components/BookList";
import useLocalStorage from "../hooks/useLocalStorage";

const AppRouter = () => {
  //initialize the books as array (key="books", value=[])
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <BooksList {...props} books={books} setBooks={setBooks} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/add"
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
