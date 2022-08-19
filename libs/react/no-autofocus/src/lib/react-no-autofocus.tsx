import styles from './react-no-autofocus.module.scss';

/* eslint-disable-next-line */
export interface ReactNoAutofocusProps {}

export function ReactNoAutofocus(props: ReactNoAutofocusProps) {
  return (
    <section>
      <div autofocus>
        no autoFocus
      </div>
    </section>
  );
}

export default ReactNoAutofocus;
