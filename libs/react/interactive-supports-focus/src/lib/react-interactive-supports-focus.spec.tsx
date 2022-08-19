import { render } from '@testing-library/react';

import ReactInteractiveSupportsFocus from './react-interactive-supports-focus';

describe('ReactInteractiveSupportsFocus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactInteractiveSupportsFocus />);
    expect(baseElement).toBeTruthy();
  });
});
