import { render } from '@testing-library/react';

import ReactAltText from './react-alt-text';

describe('ReactAltText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactAltText />);
    expect(baseElement).toBeTruthy();
  });
});
