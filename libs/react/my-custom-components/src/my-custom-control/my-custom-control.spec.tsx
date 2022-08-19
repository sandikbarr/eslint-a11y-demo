import { render } from '@testing-library/react';

import MyCustomControl from './my-custom-control';

describe('MyCustomControl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyCustomControl />);
    expect(baseElement).toBeTruthy();
  });
});
