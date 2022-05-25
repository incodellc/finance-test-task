import { render, screen } from "@testing-library/react";
import Button from "./index";
describe("Button", () => {
  const label = "My Button";

  it("default/primary button", () => {
    render(<Button>{label}</Button>);

    expect(screen.getByText(label).closest("button")).toBeInTheDocument();
  });

  it("can pass aria props", () => {
    render(<Button aria-label="foo">{label}</Button>);
    const button = screen.getByText(label).closest("button");
    expect(button).toHaveAttribute("aria-label", "foo");
  });

  it("sets button as disabled", () => {
    render(<Button disabled={true}>{label}</Button>);
    const button = screen.getByText(label).closest("button");
    expect(button).toHaveAttribute("disabled");
  });
});
