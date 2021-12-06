import { render } from "@testing-library/react";

import AdminContainersList from "./admin-containers-list";

describe("AdminContainersList", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AdminContainersList />);
    expect(baseElement).toBeTruthy();
  });
});
