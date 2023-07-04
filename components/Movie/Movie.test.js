import Movie from "./index.js";
import { render, screen } from "@testing-library/react";

// our first test with getByText()
// test("renders a movie", () => {
//   render(<Movie name="Super Mario Brothers" />);

//   const superMarioBrothers = screen.getByText("Super Mario Brothers");

//   expect(superMarioBrothers).toBeInTheDocument();
// });

// getByRole()
test("renders a movie", () => {
  render(<Movie name="Super Mario Brothers" />);

  const superMarioBrothers = screen.getByRole("heading", {
    name: "Super Mario Brothers",
    level: 2,
  });

  expect(superMarioBrothers).toBeInTheDocument();
});
