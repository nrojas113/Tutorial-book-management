import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const BookForm = (props) => {
  //Initial local state : if adding new book, initialized as empty string
  //if coming to this component from Edit button, initizlied as passed book prop
  //add lazy initialization (calling function) so renders only once when component mounts
  const [book, setBook] = useState(() => {
    return {
      bookname: props.book ? props.book.bookname : "",
      author: props.book ? props.book.author : "",
      quantity: props.book ? props.book.quantity : "",
      price: props.book ? props.book.price : "",
      date: props.book ? props.book.date : "",
    };
  });
  const [errorMsg, setErrorMsg] = useState("");
  const { bookname, author, price, quantity } = book;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({ ...prevState, [name]: value }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    //grabbing the input values from the local state
    const values = [bookname, author, price, quantity];
    let errorMsg = "";

    //check if all the input field have values
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    //if all the input have values, create new obj with book info (adding unique id & submitted date)
    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date(),
      };
      //handle on submit is passed from "AddBook" component
      props.handleOnSubmit(book);
    } else {
      //otherwise display error message
      errorMsg = "Please fill out all the fields";
    }
    setErrorMsg(errorMsg);
  };
  console.log(book);
  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
