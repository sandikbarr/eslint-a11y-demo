// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';

import { ReactLabelHasAssociatedControl } from '@eslint-a11y-demo/react/label-has-associated-control';
import { ReactAltText } from '@eslint-a11y-demo/react/alt-text';
import { ReactTabindexNoPositive } from '@eslint-a11y-demo/react/tabindex-no-positive';
import { ReactClickEventsHaveKeyEvents } from '@eslint-a11y-demo/react/click-events-have-key-events';
import { ReactMouseEventsHaveKeyEvents } from '@eslint-a11y-demo/react/mouse-events-have-key-events';

import { ReactInteractiveSupportsFocus } from '@eslint-a11y-demo/react/interactive-supports-focus';

import { ReactHasContent } from '@eslint-a11y-demo/react/has-content';

import { ReactNoAutofocus } from '@eslint-a11y-demo/react/no-autofocus';

export function App() {
  return (
    <>
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/alt-text">Alt Text</Link>
          </li>
          <li>
            <Link to="/has-content">Element Has Content</Link>
          </li>
          <li>
            <Link to="/label-has-associated-control">
              Label Has Associated Control
            </Link>
          </li>
          <li>
            <Link to="/click-events-have-key-events">
              Click Events Have Key Events
            </Link>
          </li>
          <li>
            <Link to="/mouse-events-have-key-events">
              Mouse Events Have Key Events
            </Link>
          </li>
          <li>
            <Link to="/interactive-supports-focus">
              Interactive Supports Focus
            </Link>
          </li>
          <li>
            <Link to="/tabindex-no-positive">tabIndex No Positive</Link>
          </li>

          <li>
            <Link to="/no-autofocus">No autoFocus</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/no-autofocus" element={<ReactNoAutofocus />} />
        <Route path="/has-content" element={<ReactHasContent />} />
        <Route
          path="/interactive-supports-focus"
          element={<ReactInteractiveSupportsFocus />}
        />

        <Route
          path="/label-has-associated-control"
          element={<ReactLabelHasAssociatedControl />}
        />
        <Route
          path="/click-events-have-key-events"
          element={<ReactClickEventsHaveKeyEvents />}
        />
        <Route
          path="/mouse-events-have-key-events"
          element={<ReactMouseEventsHaveKeyEvents />}
        />
        <Route path="/alt-text" element={<ReactAltText />} />
        <Route
          path="/tabindex-no-positive"
          element={<ReactTabindexNoPositive />}
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
