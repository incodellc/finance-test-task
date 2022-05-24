import { render, screen } from "@testing-library/react";
import Table from "./index";

describe("Table", () => {
  it("render columns and rows properly", () => {
    const columns = [{ field: "data", headerName: "Data" }];
    const rows = [{ data: "Sample" }];
    render(<Table columns={columns} rows={rows} />);
    expect(screen.getByText("Data")).toBeInTheDocument();
    expect(screen.getByText("Sample")).toBeInTheDocument();
  });
});
