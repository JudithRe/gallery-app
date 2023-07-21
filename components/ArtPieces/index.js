import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import { StyledFigure } from "../ArtPieceDetails";
import ImageWithButton from "../ImageWithButton";

export default function ArtPieces({
  data,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  if (data) {
    return (
      <StyledList>
        {data.map(({ slug, name, artist, imageSource }) => (
          <StyledFigure key={slug}>
            <ImageWithButton
              src={imageSource}
              alt={`${name} by ${artist}`}
              width={500}
              height={500}
              artPiecesInfo={artPiecesInfo}
              handleToggleFavorite={handleToggleFavorite}
              slug={slug}
            ></ImageWithButton>
            <StyledLink href={`/art-pieces/${slug}`}>
              <figcaption>{`"${name}" by ${artist}`}</figcaption>
            </StyledLink>
          </StyledFigure>
        ))}
      </StyledList>
    );
  }
  return <h1>Loadin...</h1>;
}

export const StyledList = styled.div`
  margin-top: var(--header-height);
  margin-bottom: var(--footer-height);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: black;
  margin-bottom: 2.5rem;
`;
