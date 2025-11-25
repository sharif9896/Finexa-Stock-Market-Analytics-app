import react from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../src/components/Hero";
import "@testing-library/jest-dom/extend-expect";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const imgElement = screen.getByAltText("Hero Image");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "media/images/homeHero.png");
  });
  //   test("renders Hero component with correct text", () => {
  //     render(<Hero />);
  //     const headingElement = screen.getByText(/Welcome to Stock Dashboard/i);
  //     expect(headingElement).toBeInTheDocument();
  //   });
  //   test("Hero component has a button", () => {
  //     render(<Hero />);
  //     const buttonElement = screen.getByRole("button");
  //     expect(buttonElement).toBeInTheDocument();
  //   });
});
