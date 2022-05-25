import { render, screen } from "@testing-library/react";
import Box from "./index";
describe("Box", () => {
  const label = "Box";

  it("default/primary button", () => {
    render(<Box>{label}</Box>);

    expect(screen.getByText(label).closest("div")).toBeInTheDocument();
  });

  it("can pass aria props", () => {
    render(<Box aria-label="foo">{label}</Box>);
    const box = screen.getByText(label).closest("div");
    expect(box).toHaveAttribute("aria-label", "foo");
  });

  it("pass custom class", () => {
    render(<Box className="custom">{label}</Box>);
    const box = screen.getByText(label).closest("div");
    expect(box).toHaveClass("custom");
  });

  it("to have padding", () => {
    render(<Box p="8px">{label}</Box>);
    const box = screen.getByText(label).closest("div");
    expect(box).toHaveStyle(`padding: 8px;`);
  });
});
