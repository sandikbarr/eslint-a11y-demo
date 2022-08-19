import styles from './react-mouse-events-have-key-events.module.scss';

/* eslint-disable-next-line */
export interface ReactMouseEventsHaveKeyEventsProps {}

export function ReactMouseEventsHaveKeyEvents(
  props: ReactMouseEventsHaveKeyEventsProps
) {
  function onMouseOver() {
    //
  }
  function onMouseOut() {
    //
  }
  function onFocus() {
    //
  }
  function onBlur() {
    //
  }

  return (
    <section>
      <p>mouseover/mouseout paired with focus/blur:</p>
      <div onMouseOver={onMouseOver} onFocus={onFocus} tabIndex={0}>
        mouseover with focus
      </div>
      <div onMouseOut={onMouseOut} onBlur={onBlur} tabIndex={0}>
        mouseout with blur
      </div>
      <div
        onMouseOver={onMouseOver}
        onFocus={onFocus}
        onMouseOut={onMouseOut}
        onBlur={onBlur}
        tabIndex={0}
      >
        mouseover with focus and mouseout with blur
      </div>
    </section>
  );
}

export default ReactMouseEventsHaveKeyEvents;
