import Movies from "./index.js";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const exampleInitialMovies = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

test("renders initial movies list", () => {
  render(<Movies initialMovies={exampleInitialMovies} />);

  const hulkHeading = screen.getByRole("heading", {
    name: "The Incredible Hulk",
  });

  expect(hulkHeading).toBeInTheDocument();

  const spidermanHeading = screen.getByRole("heading", {
    name: "Spiderman 1-25",
  });

  expect(spidermanHeading).toBeInTheDocument();

  const lordOfTheRingsHeading = screen.getByRole("heading", {
    name: "Lord of the Rings",
  });

  expect(lordOfTheRingsHeading).toBeInTheDocument();
});

test("renders a new movie when the form is submitted", async () => {
  const user = userEvent.setup();

  render(<Movies initialMovies={exampleInitialMovies} />);

  const input = screen.getByLabelText("Name");

  await user.type(input, "The Matrix");

  const button = screen.getByRole("button", { name: "Add" });

  await user.click(button);

  const matrixHeading = screen.getByRole("heading", { name: "The Matrix" });

  expect(matrixHeading).toBeInTheDocument();
});
