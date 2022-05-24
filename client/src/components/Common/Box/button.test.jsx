import { render, screen } from "@testing-library/react";
import Box from "./index";
describe("Box", () => {
  const label = "Box";

  it("default/primary button", () => {
    render(<Box>{label}</Box>);

    expect(screen.getByText(label).closest("div")).toBeInTheDocument();
  });

  it("can pass aria props", () => {
    render(<Box>{label}</Box>);
    const button = screen.getByText(label).closest("button");
    expect(button).toHaveAttribute("aria-label", "foo");
  });

  it("sets button as disabled", () => {
    render(<Box>{label}</Box>);
    const button = screen.getByText(label).closest("button");
    expect(button).toHaveAttribute("disabled");
  });
});
