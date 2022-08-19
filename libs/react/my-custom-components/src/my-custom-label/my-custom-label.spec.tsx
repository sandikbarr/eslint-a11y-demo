import { render } from '@testing-library/react';

import MyCustomLabel from './my-custom-label';

describe('MyCustomLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyCustomLabel />);
    expect(baseElement).toBeTruthy();
  });
});
