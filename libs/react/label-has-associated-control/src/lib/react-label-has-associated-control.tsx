import styles from './react-label-has-associated-control.module.scss';
import { MyCustomControl, MyCustomLabel } from 'react-custom-components';

/* eslint-disable-next-line */
export interface ReactLabelHasAssociatedControlProps {}

export function ReactLabelHasAssociatedControl(
  props: ReactLabelHasAssociatedControlProps
) {
  return (
    <div className={styles['container']}>
    <form>

      <p>matching for and id:</p>
      <label htmlFor="name">Name</label>
      <input type="text" id="name"/>

      <p>label wrapping control:</p>
      <label><input type="checkbox"/>Subscribe to Updates</label>

      <p>configured for MyCustomControl:</p>
      <label><MyCustomControl></MyCustomControl>Agree to Terms</label>
    </form>
    </div>
  );
}

export default ReactLabelHasAssociatedControl;
