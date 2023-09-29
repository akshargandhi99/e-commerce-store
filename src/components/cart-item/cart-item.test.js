import React from "react";
import { render, screen } from "@testing-library/react";
import CartItem from "./cart-item.component";
import "@testing-library/jest-dom";

it("renders the correct name and price", () => {
  render(
    <CartItem
      cartItem={{ name: "item", imageUrl: "image.png", price: 10, quantity: 1 }}
    />
  );
  expect(screen.getByText("item")).toBeInTheDocument();
  expect(screen.getByText("1 x $10")).toBeInTheDocument();
});
