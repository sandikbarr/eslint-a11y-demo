import { render } from '@testing-library/react';

import ReactLabelHasAssociatedControl from './react-label-has-associated-control';

describe('ReactLabelHasAssociatedControl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLabelHasAssociatedControl />);
    expect(baseElement).toBeTruthy();
  });
});
