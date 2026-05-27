/**
 * Unit tests for the Gallery component.
 *
 * Verifies:
 * - initial image rendering
 * - next and previous navigation
 * - carousel looping behavior
 * - hidden controls for a single image
 */
import React from "react";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import Gallery from "./Gallery";

jest.mock("next/image", () => ({
  __esModule: true,

  default: ({ alt, ...props }) => {
    return React.createElement("img", {
      alt,
      ...props,
    });
  },
}));

const images = ["image-1.jpg", "image-2.jpg", "image-3.jpg"];

describe("Gallery carousel", () => {
  test("renders the first image", () => {
    render(<Gallery images={images} />);

    const image = screen.getByAltText("Photo 1 du logement");

    expect(image).toBeInTheDocument();
  });

  test("shows next image when clicking next button", async () => {
    const user = userEvent.setup();

    render(<Gallery images={images} />);

    const nextButton = screen.getByRole("button", {
      name: "Image suivante",
    });

    await user.click(nextButton);

    expect(screen.getByAltText("Photo 2 du logement")).toBeInTheDocument();
  });

  test("loops to first image from last image", async () => {
    const user = userEvent.setup();

    render(<Gallery images={images} />);

    const nextButton = screen.getByRole("button", {
      name: "Image suivante",
    });

    await user.click(nextButton);

    await user.click(nextButton);

    await user.click(nextButton);

    expect(screen.getByAltText("Photo 1 du logement")).toBeInTheDocument();
  });

  test("shows previous image when clicking previous button", async () => {
    const user = userEvent.setup();

    render(<Gallery images={images} />);

    const previousButton = screen.getByRole("button", {
      name: "Image précédente",
    });

    await user.click(previousButton);

    expect(screen.getByAltText("Photo 3 du logement")).toBeInTheDocument();
  });

  test("hides controls when there is only one image", () => {
    render(<Gallery images={["single-image.jpg"]} />);

    expect(
      screen.queryByRole("button", {
        name: "Image suivante",
      }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("button", {
        name: "Image précédente",
      }),
    ).not.toBeInTheDocument();
  });
});
