import styles from './react-interactive-supports-focus.module.scss';

/* eslint-disable-next-line */
export interface ReactInteractiveSupportsFocusProps {}

export function ReactInteractiveSupportsFocus(
  props: ReactInteractiveSupportsFocusProps
) {
  function onClick() {
    //
  }
  
  return (
    <section>
      <div role="button" onClick={onClick} tabIndex={0}>
        role="button"
      </div>

      <div
        onClick={onClick}
        role="presentation">
        <button>Save</button>
      </div>
    </section>
  );
}

export default ReactInteractiveSupportsFocus;
