import React from "react";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import FavoriteButton from "./FavoriteButton";

jest.mock("next/image", () => ({
  __esModule: true,

  default: (props) => {
    return React.createElement("img", props);
  },
}));

describe("FavoriteButton", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("adds favorite when clicked", async () => {
    const user = userEvent.setup();

    render(<FavoriteButton propertyId="123" />);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(localStorage.getItem("favorites")).toContain("123");
  });

  test("removes favorite when clicked again", async () => {
    const user = userEvent.setup();

    render(<FavoriteButton propertyId="123" />);

    const button = screen.getByRole("button");

    await user.click(button);

    await user.click(button);

    expect(localStorage.getItem("favorites")).toBe("[]");
  });

  test("restores favorite from localStorage", () => {
    localStorage.setItem("favorites", JSON.stringify(["123"]));

    render(<FavoriteButton propertyId="123" />);

    const button = screen.getByRole("button");

    expect(button.className).toContain(
      "property-card__favorite-button--active",
    );
  });
});
