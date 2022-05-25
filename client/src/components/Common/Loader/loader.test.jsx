import { render, screen } from "@testing-library/react";
import Loader from "./index";
import Box from "./index";
describe("Box", () => {
  it("default/primary button", () => {
    render(<Loader />);

    expect(screen.getByRole("status")).toHaveAttribute("aria-busy", "true");
  });

  it("renders spinner", () => {
    render(<Loader type="spinner" />);

    expect(screen.getByRole("status")).toHaveStyle(`background: transparent;`);
  });

  it("renders default", () => {
    render(<Loader />);

    expect(screen.getByRole("status")).toHaveStyle(
      `border-color: white transparent transparent transparent`
    );
  });
});
