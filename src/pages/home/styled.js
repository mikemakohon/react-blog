import styled from "@emotion/styled";
import { Card } from "reactstrap";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  display: flex;
  justify-content: center;
`;

export const StyledCard = styled(Card)`
  color: #333333;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
  text-align: center;
`;
