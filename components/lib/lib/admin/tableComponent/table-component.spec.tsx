import { render } from "@testing-library/react";

import TableComponent from "./table-component";

describe("TableComponent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TableComponent />);
    expect(baseElement).toBeTruthy();
  });
});
