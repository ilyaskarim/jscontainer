import { render } from "@testing-library/react";

import ContainerInfo from "./container-info";

describe("ContainerInfo", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ContainerInfo />);
    expect(baseElement).toBeTruthy();
  });
});
