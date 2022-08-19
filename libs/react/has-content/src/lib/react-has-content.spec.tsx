import { render } from '@testing-library/react';

import ReactHasContent from './react-has-content';

describe('ReactHasContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactHasContent />);
    expect(baseElement).toBeTruthy();
  });
});
