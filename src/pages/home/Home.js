import React from "react";
import { StyledContainer, StyledCard } from "./styled";
import { CardBody, CardText, CardTitle } from "reactstrap";
import cardImage from "./img/Brussels.jpg";

export default function Home() {
  return (
    <StyledContainer className="home">
      <StyledCard>
        <CardBody>
          <img alt="me and the pissing boy" src={cardImage} width="30%" />
          <CardTitle tag="h1">Привіт.</CardTitle>
          <CardText>
            Я Міша, формошльоп-початківець (колись Project Manager та
            сертифікований Scrum Master без досвіду).
          </CardText>
          <CardText>
            У вільний час читаю non-fiction, дивлюсь спортивні ефіри (футбол,
            баскетбол, UFC), міксую алкоголь, та ізжу/їздив по концертах (був на
            Linkin Park в Одесі, на Muse в Києві, на Stone Sour в Києві, інші
            менш цікаві).
          </CardText>
          <CardText>P.s. На фото я і Хлопчик-дзюркунчик.</CardText>
        </CardBody>
      </StyledCard>
    </StyledContainer>
  );
}
