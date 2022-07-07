import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { CardTitle, CardBody, CardText, Button } from "reactstrap";
import { StyledContainer, StyledCard } from "./styled";
import Pagination from "../Pagination";

export default function BookList({ books }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (itemNumber) => {
    setCurrentPage(itemNumber);
  };

  return (
    <StyledContainer>
      {currentItems.map((book) => (
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
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={books.length}
        paginate={paginate}
      />
    </StyledContainer>
  );
}
