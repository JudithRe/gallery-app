import Favourites from "@/components/Favourites";

export default function FavouritesPage({
  data,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <Favourites
        data={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
