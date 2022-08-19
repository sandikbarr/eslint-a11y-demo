import { render } from '@testing-library/react';

import ReactNoAutofocus from './react-no-autofocus';

describe('ReactNoAutofocus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNoAutofocus />);
    expect(baseElement).toBeTruthy();
  });
});
