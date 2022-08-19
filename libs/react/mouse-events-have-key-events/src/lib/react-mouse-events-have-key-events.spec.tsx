import { render } from '@testing-library/react';

import ReactMouseEventsHaveKeyEvents from './react-mouse-events-have-key-events';

describe('ReactMouseEventsHaveKeyEvents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactMouseEventsHaveKeyEvents />);
    expect(baseElement).toBeTruthy();
  });
});
