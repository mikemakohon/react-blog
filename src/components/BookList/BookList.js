import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { CardTitle, CardBody, CardText, Button } from "reactstrap";
import {
  StyledContainer,
  StyledCard,
  StyledEditButton,
  StyledDeleteButton,
} from "./styled";
import PropTypes from "prop-types";

export default function BookList({ books, onEdit, onDelete }) {
  return (
    <StyledContainer>
      {books.map((book) => (
        <StyledCard body color="light" key={book.id}>
          <CardBody>
            <div style={{ textAlign: "right", gap: "10px" }}>
              <StyledEditButton onClick={onEdit}>Edit</StyledEditButton>
              <StyledDeleteButton onClick={onDelete}>Delete</StyledDeleteButton>
            </div>
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

BookList.propTypes = {
  books: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

BookList.defaultProps = {
  books: [],
  onEdit: () => {},
  onDelete: () => {},
};
