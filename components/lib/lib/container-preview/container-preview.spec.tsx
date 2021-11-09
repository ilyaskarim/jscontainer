import { render } from "@testing-library/react";

import ContainerPreview from "./container-preview";

describe("ContainerPreview", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ContainerPreview />);
    expect(baseElement).toBeTruthy();
  });
});
