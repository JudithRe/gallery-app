import Link from "next/link";
import { styled } from "styled-components";
import { StyledLink } from "../ArtPieces";

export default function Navigation() {
  return (
    <StyledNavigation>
      <>
        <li>
          <StyledLink href="/">Spotlight</StyledLink>
        </li>
        <li>
          <StyledLink href="/art-pieces/">Art Pieces</StyledLink>
        </li>
        <li>
          <StyledLink href="/favourites/">Favourites</StyledLink>
        </li>
      </>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: var(--footer-height);
  padding: 2rem;
  background-color: white;
  text-align: center;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

//  Create the component Layout that renders the Navigation component
//  Apply the Layout component in pages/_app
