import { render } from "@testing-library/react";

import ContainerNavBbuttons from "./container-nav-buttons";

describe("ContainerNavBbuttons", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ContainerNavBbuttons />);
    expect(baseElement).toBeTruthy();
  });
});
