import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card component", () => {
  test("renders Card component", () => {
    render(<Card name={"name"} src={"expected-src-value"} />);

    expect(screen.getByText("name")).toBeInTheDocument();
  });

  test("renders correct image URL", () => {
    render(<Card name={"name"} src={"expected-src-value"} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "expected-src-value");
  });

  test("truncates long names", () => {
    render(
      <Card
        name={"This is a very long name that should be truncated"}
        src={"expected-src-value"}
      />
    );
    const truncatedName = screen.getByText("This is a very long na...");
    expect(truncatedName).toBeInTheDocument();
  });

  test("does not truncate short names", () => {
    render(<Card name={"Short name"} src={"expected-src-value"} />);
    const shortName = screen.getByText("Short name");
    expect(shortName).toBeInTheDocument();
  });
});
