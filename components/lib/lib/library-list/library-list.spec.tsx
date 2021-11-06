import { render } from "@testing-library/react";

import LibraryList from "./library-list";

describe("LibraryList", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<LibraryList />);
    expect(baseElement).toBeTruthy();
  });
});
