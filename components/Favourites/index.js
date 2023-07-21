import { StyledFigure } from "../ArtPieceDetails";
import ImageWithButton from "../ImageWithButton";
import { StyledLink, StyledList } from "../ArtPieces";

export default function Favourites({
  data,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  if (data) {
    function filterFavorite(slug) {
      const foundArt = artPiecesInfo.find((info) => info.slug === slug);
      if (foundArt) {
        if (foundArt.isFavorite) {
          return true;
        }
      }
      return false;
    }
    const filteredData = data.filter((piece) => {
      return filterFavorite(piece.slug);
    });

    return (
      <StyledList>
        {filteredData.map(({ slug, name, artist, imageSource }) => (
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
            <StyledLink href={`/art-pieces/${slug}`} key={slug}>
              <figcaption>{`"${name}" by ${artist}`}</figcaption>
            </StyledLink>
          </StyledFigure>
        ))}
      </StyledList>
    );
  }
  return <h1>Loading...</h1>;
}
