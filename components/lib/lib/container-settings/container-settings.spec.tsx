import { render } from "@testing-library/react";

import ContainerSettings from "./container-settings";

describe("ContainerSettings", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ContainerSettings />);
    expect(baseElement).toBeTruthy();
  });
});
