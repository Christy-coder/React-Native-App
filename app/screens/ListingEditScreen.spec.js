import React from "react";
import { render, screen } from "@testing-library/react-native";
import ListingDetailScreen from "../components/ListingDetailScreen";

describe("ListingDetailScreen", () => {
  it("should render the image, title, price, and user", () => {
    render(<ListingDetailScreen />);

    expect(screen.getByRole("image")).toBeInTheDocument();

    expect(screen.getByText("Green jacket for sale")).toBeInTheDocument();

    expect(screen.getByText("$100")).toBeInTheDocument();

    expect(screen.getByText("Christelle Desire")).toBeInTheDocument();
  });
});
