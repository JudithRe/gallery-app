import { render, screen } from "@testing-library/react";
import ArtPieceDetails, { BackButton } from ".";

test("displays image", () => {
  render(
    <ArtPieceDetails
      image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg"
      title="TitleOne"
      year={2018}
      genre="Impressionism"
      artist="Picasso"
    />
  );
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(1);
});

test("displays title", () => {
  render(
    <ArtPieceDetails
      image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg"
      title="TitleOne"
      year={2018}
      genre="Impressionism"
      artist="Picasso"
    />
  );
  const title = screen.getByText(/TitleOne/i);
  expect(title).toBeInTheDocument();
});

test("displays artist", () => {
  render(
    <ArtPieceDetails
      image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg"
      title="TitleOne"
      year={2018}
      genre="Impressionism"
      artist="Picasso"
    />
  );
  const artist = screen.getByText(/Picasso/i);
  expect(artist).toBeInTheDocument();
});

test("displays year", () => {
  render(
    <ArtPieceDetails
      image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg"
      title="TitleOne"
      year={2018}
      genre="Impressionism"
      artist="Picasso"
    />
  );
  const year = screen.getByText(/2018/i);
  expect(year).toBeInTheDocument();
});

test("displays genre", () => {
  render(
    <ArtPieceDetails
      image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg"
      title="TitleOne"
      year={2018}
      genre="Impressionism"
      artist="Picasso"
    />
  );
  const genre = screen.getByText(/Impressionism/i);
  expect(genre).toBeInTheDocument();
});

test("displays button", () => {
  render(
    <ArtPieceDetails
      image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg"
      title="TitleOne"
      year={2018}
      genre="Impressionism"
      artist="Picasso"
    />
  );
  const button = screen.getByRole("link", { name: "Return to List" });
  expect(button).toBeInTheDocument();
});
