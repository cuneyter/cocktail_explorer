import React from "react";
import { render, screen } from "@testing-library/react";
import CardList from "../components/CardList";

describe("CardList Component", () => {
  const mockCocktails = [
    {
      strDrink: "155 Belmont",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      idDrink: "15346",
    },
    {
      strDrink: "White License Plate",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
      idDrink: "14029",
    },
  ];

  test("renders CardList with cocktails", () => {
    render(<CardList cocktails={mockCocktails} />);
    const cardNameElements = screen.getAllByRole("heading");
    expect(cardNameElements).toHaveLength(mockCocktails.length);
    expect(screen.getByText("155 Belmont")).toBeInTheDocument();
    expect(screen.getByText("White License Plate")).toBeInTheDocument();
  });

  test("renders message when no cocktails are available", () => {
    render(<CardList cocktails={[]} />);
    expect(screen.getByText("No cocktails available")).toBeInTheDocument();
  });
});
