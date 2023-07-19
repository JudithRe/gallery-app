import Link from "next/link";
import { styled } from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <nav>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces/">Art Pieces</Link>
        </li>
        <li>
          <Link href="/favourites/">Favourites</Link>
        </li>
      </nav>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 2rem;
  background-color: green;
`;

//  Create the component Layout that renders the Navigation component
//  Apply the Layout component in pages/_app
