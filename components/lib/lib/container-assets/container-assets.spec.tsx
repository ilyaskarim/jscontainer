import { render } from "@testing-library/react";

import ContainerCard from "./container-assets";

describe("ContainerCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ContainerCard />);
    expect(baseElement).toBeTruthy();
  });
});
