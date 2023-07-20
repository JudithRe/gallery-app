import Image from "next/image";
import { styled } from "styled-components";

export default function Spotlight({ data }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  if (!data) {
    return <p>loading...</p>;
  }

  const randomNumber = getRandomInt(data.length);

  const randomArtPiece = data[randomNumber];

  return (
    <StyledSpotlight>
      <Image
        src={randomArtPiece.imageSource}
        alt={`${randomArtPiece.name} by ${randomArtPiece.artist}`}
        width={500}
        height={500}
      />
      <h1>{randomArtPiece.artist}</h1>
    </StyledSpotlight>
  );
}

const StyledSpotlight = styled.section`
  margin-top: var(--header-height);
  margin-bottom: var(--footer-height);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
