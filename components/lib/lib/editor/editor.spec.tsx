import { render } from '@testing-library/react';

import Editor from './editor';

describe('Editor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Editor />);
    expect(baseElement).toBeTruthy();
  });
});
