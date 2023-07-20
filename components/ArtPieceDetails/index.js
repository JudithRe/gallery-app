import Image from "next/image";
import { styled } from "styled-components";
import ImageWithButton from "../ImageWithButton";

export default function ArtPieceDetails({
  image,
  title,
  year,
  genre,
  artist,

  handleToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  return (
    <StyledDetail>
      <BackButton as="a" href="/art-pieces/">
        Return to List
      </BackButton>
      <StyledFigure>
        <ImageWithButton
          src={image}
          alt={`${title} by ${artist}`}
          width={500}
          height={500}
          handleToggleFavorite={handleToggleFavorite}
          slug={slug}
          artPiecesInfo={artPiecesInfo}
        ></ImageWithButton>
        <figcaption>{`${title} by ${artist} (${year}) ${genre}`}</figcaption>
      </StyledFigure>
    </StyledDetail>
  );
}

const BackButton = styled.a`
  text-decoration: none;
  color: black;
  margin-left: 1.5rem;
  font-size: 1.3rem;
  display: block;
  padding-bottom: 1rem;
  &::before {
    content: "⬅ ";
  }
`;
const StyledDetail = styled.section`
  margin-top: var(--header-height);
  margin-bottom: var(--footer-height);
`;

export const StyledFigure = styled.figure`
  width: 100%;
  margin: 0;
  font-size: 1.3rem;
`;
