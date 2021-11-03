import { render } from "@testing-library/react";

import LibrarySelect from "./library-select";

describe("LibrarySelect", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<LibrarySelect />);
    expect(baseElement).toBeTruthy();
  });
});
