import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

test("displays all art pieces as a list", () => {
  render(
    <ArtPieces
      data={[
        {
          slug: "test1",
          name: "beautiful picture1",
          artist: "artist1",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
        {
          slug: "test2",
          name: "beautiful picture2",
          artist: "artist2",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
        {
          slug: "test3",
          name: "beautiful picture3",
          artist: "artist3",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
      ]}
    />
  );
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(3);
});

test("displays art pieces title", () => {
  render(
    <ArtPieces
      data={[
        {
          slug: "test1",
          name: "beautiful picture1",
          artist: "artist1",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
        {
          slug: "test2",
          name: "beautiful picture2",
          artist: "artist2",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
        {
          slug: "test3",
          name: "beautiful picture3",
          artist: "artist3",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
      ]}
    />
  );

  const title1 = screen.getByText(/beautiful picture1/i);
  const title2 = screen.getByText(/beautiful picture2/i);
  const title3 = screen.getByText(/beautiful picture3/i);

  expect(title1).toBeInTheDocument();
  expect(title2).toBeInTheDocument();
  expect(title3).toBeInTheDocument();
});

test("displays art pieces artist", () => {
  render(
    <ArtPieces
      data={[
        {
          slug: "test1",
          name: "beautiful picture1",
          artist: "artist1",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
        {
          slug: "test2",
          name: "beautiful picture2",
          artist: "artist2",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
        {
          slug: "test3",
          name: "beautiful picture3",
          artist: "artist3",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
      ]}
    />
  );

  const artist1 = screen.getByText(/artist1/i);
  const artist2 = screen.getByText(/artist2/i);
  const artist3 = screen.getByText(/artist3/i);

  expect(artist1).toBeInTheDocument();
  expect(artist2).toBeInTheDocument();
  expect(artist3).toBeInTheDocument();
});

test("displays art pieces images", () => {
  render(
    <ArtPieces
      data={[
        {
          slug: "test1",
          name: "beautiful picture1",
          artist: "artist1",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
        {
          slug: "test2",
          name: "beautiful picture2",
          artist: "artist2",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
        {
          slug: "test3",
          name: "beautiful picture3",
          artist: "artist3",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        },
      ]}
    />
  );

  const image1 = screen.getByAltText(/beautiful picture1 by artist1/i);

  expect(image1).toBeInTheDocument();
});
