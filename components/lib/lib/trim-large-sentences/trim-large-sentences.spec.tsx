import { render } from "@testing-library/react";

import TrimLargeSentences from "./trim-large-sentences";

describe("TrimLargeSentences", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TrimLargeSentences />);
    expect(baseElement).toBeTruthy();
  });
});
