import React from "react";
import {
  StyledContainer,
  StyledLogo,
  StyledNav,
  StyledNavLink,
} from "./styled";

export default function Header() {
  return (
    <StyledContainer className="navbar">
      <StyledLogo to="/">Book Storage</StyledLogo>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/books">Books</StyledNavLink>
        <StyledNavLink to="/statistics">Statistics</StyledNavLink>
      </StyledNav>
    </StyledContainer>
  );
}
