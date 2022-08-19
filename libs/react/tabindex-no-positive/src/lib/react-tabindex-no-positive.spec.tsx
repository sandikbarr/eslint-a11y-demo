import { render } from '@testing-library/react';

import ReactTabindexNoPositive from './react-tabindex-no-positive';

describe('ReactTabindexNoPositive', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTabindexNoPositive />);
    expect(baseElement).toBeTruthy();
  });
});
