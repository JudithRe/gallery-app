import { styled } from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Art Gallery</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: var(--header-height);
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
  padding: 1rem;
  background-color: white;
`;
