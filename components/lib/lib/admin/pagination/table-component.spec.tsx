import { render } from "@testing-library/react";

import Paginaton from "./pagination";

describe("Paginaton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Paginaton />);
    expect(baseElement).toBeTruthy();
  });
});
