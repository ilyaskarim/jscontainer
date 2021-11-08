import { render } from "@testing-library/react";

import GoogleAnalytics from "./google-analytics";

describe("GoogleAnalytics", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<GoogleAnalytics />);
    expect(baseElement).toBeTruthy();
  });
});
