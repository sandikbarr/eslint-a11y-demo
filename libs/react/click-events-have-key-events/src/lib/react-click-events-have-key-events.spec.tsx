import { render } from '@testing-library/react';

import ReactClickEventsHaveKeyEvents from './react-click-events-have-key-events';

describe('ReactClickEventsHaveKeyEvents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactClickEventsHaveKeyEvents />);
    expect(baseElement).toBeTruthy();
  });
});
