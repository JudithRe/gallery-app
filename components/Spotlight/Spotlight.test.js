import { render, screen } from "@testing-library/react";

import Spotlight from ".";

test("displays a random art pieces image", () => {
  render(
    <Spotlight
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
  expect(images).toHaveLength(1);
});

test("displays a random art pieces artist", () => {
  render(
    <Spotlight
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

  const artist = screen.getByText(/artist/i);
  expect(artist).toBeInTheDocument();
});
