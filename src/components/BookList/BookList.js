import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { CardTitle, CardBody, CardText, Button } from "reactstrap";
import { StyledContainer, StyledCard } from "./styled";

export default function BookList({ books }) {
  return (
    <StyledContainer>
      {books.map((book) => (
        <StyledCard body color="light" key={book.id}>
          <CardBody>
            <CardTitle tag="h3">{book.title}</CardTitle>
            <CardText className="description">
              {book.description.substring(0, 100)}...
            </CardText>
            <CardText className="date">
              {moment(book.publishDate).format("MMM DD YYYY")}
            </CardText>
            <Link to={`/books/${book.id}`}>
              <Button color="secondary" outline>
                Read More
              </Button>
            </Link>
          </CardBody>
        </StyledCard>
      ))}
    </StyledContainer>
  );
}