import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../containers/App";
import { act } from "react-dom/test-utils";

// Mock fetch API
beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          drinks: [
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
          ],
        }),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("App Component", () => {
  test("renders cocktails after fetch", async () => {
    await act(async () => {
      render(<App />);
    });
    const cocktailOne = await screen.findByText("155 Belmont");
    const cocktailTwo = await screen.findByText("White License Plate");

    expect(cocktailOne).toBeInTheDocument();
    expect(cocktailTwo).toBeInTheDocument();
  });

  test("filters robots based on search input", async () => {
    await act(async () => {
      render(<App />);
    });

    // Wait for robots to be displayed
    await screen.findByText("155 Belmont");

    // Simulate typing into the search box
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "155 Belmont" },
    });

    // Assert that only the searched robot is displayed
    expect(screen.getByText("155 Belmont")).toBeInTheDocument();
    expect(screen.queryByText("White License Plate")).not.toBeInTheDocument();
  });

  test("displays loading message when robots array is empty", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ drinks: [] }),
      })
    );

    await act(async () => {
      render(<App />);
    });

    const loadingElement = await screen.findByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });

  test("does not display loading message when robots array is not empty", async () => {
    await act(async () => {
      render(<App />);
    });

    const cocktailsOne = await screen.findByText("155 Belmont");
    expect(cocktailsOne).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).toBeNull();
  });
});
