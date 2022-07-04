import React from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { CardBody, CardTitle, CardText } from "reactstrap";
import { StyledContainer, StyledCard } from "./styled";
import Spinner from "../../components/Spinner";

export default function Book() {
  const { id } = useParams();
  const url = `/Books/${id}`;
  const { error, loading, data: book } = useAxios(url);

  return (
    <StyledContainer className="book">
      {error && <p className="error">{error}</p>}
      {loading && !book && <Spinner />}
      {book && !loading && !error && (
        <StyledCard body color="light" outline>
          <CardBody>
            <CardTitle tag="h1">{book.title}</CardTitle>
            <CardText>{book.description}</CardText>
            <CardText>Pages: {book.pageCount}</CardText>
            <CardText>
              {new Date(book.publishDate).toLocaleDateString()}
            </CardText>
          </CardBody>
        </StyledCard>
      )}
    </StyledContainer>
  );
}
