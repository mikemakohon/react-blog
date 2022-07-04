import styled from "@emotion/styled";
import { Nav } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

export const StyledContainer = styled.div`
  background-color: #58249c;
  padding: 10px 20px;
  color: #ffffff;
`;

export const StyledLogo = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 8px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  font-size: 30px;
  font-weight: 600;
  &:hover {
    color: inherit;
  }
`;

export const StyledNav = styled(Nav)`
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  padding: 20px;
  font-size: 28px;
  &:hover {
    color: #ffffff;
    opacity: 0.9;
  }
  &.active {
    font-weight: 600;
    background-color: #ffffff;
    color: #58249c;
  }
`;
