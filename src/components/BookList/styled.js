import styled from "@emotion/styled";
import { Card } from "reactstrap";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
`;

export const StyledCard = styled(Card)`
  color: #333333;
  padding: 20px;
  flex-basis: 380px;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  &:hover {
    transform: rotate(3deg);
  }
`;
