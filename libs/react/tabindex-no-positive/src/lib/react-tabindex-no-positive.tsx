import styles from './react-tabindex-no-positive.module.scss';

/* eslint-disable-next-line */
export interface ReactTabindexNoPositiveProps {
  tabIndex?: number;
}

export function ReactTabindexNoPositive({tabIndex = 1}: ReactTabindexNoPositiveProps) {
  return (
    <section>

      <div /* has tabIndex of 0 or undefined */ >
        <div tabIndex={0}>tabIndex 0</div>
        <div tabIndex={undefined}>tabIndex undefined</div>
      </div>

      <div /* has tabIndex of -1 */ >
        <span tabIndex={-1}>tabIndex -1</span>
      </div>

      <div /* ignores interpolated values */>
        <span tabIndex={tabIndex}>tabIndex 1</span>
      </div>

      <div /* has positive tabindex */ >
        <div tabIndex={1}>tabIndex 1</div>
        <div tabIndex={5}>tabIndex 5</div>
      </div>
    </section>
  );
}

export default ReactTabindexNoPositive;
