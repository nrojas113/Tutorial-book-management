import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BooksList from "../components/BookList";
import EditBook from "../components/EditBook";
import useLocalStorage from "../hooks/useLocalStorage";
import BooksContext from "../context/BooksContext";

const AppRouter = () => {
  //initialize the books as array (key="books", value=[])
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          {/* By wrapping all the routes inside this context component
          value props that is passed is accessible to all the components
          inside the routes. */}
          <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={BooksList} path="/" exact={true} />
              <Route component={AddBook} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              {/* if route doesn't match any of above, redirect to / page */}
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

/* Alternative way to write Route & passing necessary props

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
<Route
  render={(props) => (
    <EditBook {...props} books={books} setBooks={setBooks} />
  )}
  path="/edit/:id"
/>
*/
