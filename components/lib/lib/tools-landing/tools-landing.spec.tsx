import { render } from "@testing-library/react";

import ToolsLanding from "./tools-landing";

describe("ToolsLanding", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ToolsLanding />);
    expect(baseElement).toBeTruthy();
  });
});
