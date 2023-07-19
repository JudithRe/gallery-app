import { render, screen } from "@testing-library/react";
import Navigation from ".";

test("displays a link labelled 'Spotlight'", () => {
  render(<Navigation />);

  const spotlightLink = screen.getByRole("link", { name: "Spotlight" });
  expect(spotlightLink).toBeInTheDocument();
});

test("displays a link labelled 'Art Pieces'", () => {
  render(<Navigation />);

  const artLink = screen.getByRole("link", { name: "Art Pieces" });
  expect(artLink).toBeInTheDocument();
});
