import { styled } from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Art Gallery</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 1rem;
  background-color: green;
`;
