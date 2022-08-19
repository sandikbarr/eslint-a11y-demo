import styles from './react-has-content.module.scss';

/* eslint-disable-next-line */
export interface ReactHasContentProps {}

export function ReactHasContent(props: ReactHasContentProps) {
  return (
    <section>
      <p>anchor has content:</p>
      <a href="/#">link to nowhere</a>

      <p>heading has content:</p>
      <h1>Heading!</h1>
      <h1 title="the heading"></h1>
    </section>
  );
}

export default ReactHasContent;
