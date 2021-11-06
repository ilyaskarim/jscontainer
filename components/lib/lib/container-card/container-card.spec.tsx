import { render } from '@testing-library/react';

import ContainerCard from './container-card';

describe('ContainerCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ContainerCard />);
    expect(baseElement).toBeTruthy();
  });
});
