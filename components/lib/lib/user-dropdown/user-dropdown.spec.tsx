import { render } from "@testing-library/react";

import UserDropdown from "./user-dropdown";

describe("UserDropdown", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UserDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
