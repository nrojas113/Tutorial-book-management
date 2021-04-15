import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import BookForm from "./components/BookForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <BookForm />
  </BrowserRouter>,
  document.getElementById("root")
);
