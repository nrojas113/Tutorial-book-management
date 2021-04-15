import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const BookForm = (props) => {
  const [book, setBook] = useState({
    bookname: props.book ? props.book.bookname : "",
    author: props.book ? props.book.author : "",
    quantity: props.book ? props.book.quantity : "",
    price: props.book ? props.book.price : "",
    date: props.book ? props.book.date : "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const { bookname, author, price, quantity } = book;

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form>
        <Form.Group>
          <Form.Label>Book Name</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Book Author</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>BookPrice</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default BookForm;
