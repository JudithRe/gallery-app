import Image from "next/image";
import { styled } from "styled-components";
import { StyledLink } from "../ArtPieces";
import ImageWithButton from "../ImageWithButton";

export default function Spotlight({
  data,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  if (!data) {
    return <p>loading...</p>;
  }

  const randomNumber = getRandomInt(data.length);

  const randomArtPiece = data[randomNumber];

  return (
    <StyledLink href={`/art-pieces/${randomArtPiece.slug}`}>
      <StyledSpotlight>
        <ImageWithButton
          src={randomArtPiece.imageSource}
          alt={`${randomArtPiece.name} by ${randomArtPiece.artist}`}
          width={500}
          height={500}
          artPiecesInfo={artPiecesInfo}
          handleToggleFavorite={handleToggleFavorite}
          slug={randomArtPiece.slug}
        />
        <h1>{randomArtPiece.artist}</h1>
      </StyledSpotlight>
    </StyledLink>
  );
}

const StyledSpotlight = styled.section`
  margin-top: var(--header-height);
  margin-bottom: var(--footer-height);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
