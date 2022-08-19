import styles from './react-click-events-have-key-events.module.scss';

/* eslint-disable-next-line */
export interface ReactClickEventsHaveKeyEventsProps {}

export function ReactClickEventsHaveKeyEvents(
  props: ReactClickEventsHaveKeyEventsProps
) {
  function onClick() {
    //
  }

  function onKeyUp() {
    //
  }

  return (
    <section>

      <p>has click and key events:</p>
      <div onClick={onClick} onKeyUp={onKeyUp} tabIndex={0}>
        but div is not interactive by default
      </div>

      <p>anchor with href is interactive by default:</p>
      <a href="/#" onClick={onClick}>anchor with onClick</a>

      <p>buttons and inputs are interactive by default:</p>
      <button onClick={onClick}>button</button>
      <input onClick={onClick} />

      <p>elements with aria-hidden are ignored by screen readers:</p>
      <div onClick={onClick} aria-hidden="true">
        div is aria-hidden
      </div>

    </section>
  );
}

export default ReactClickEventsHaveKeyEvents;
