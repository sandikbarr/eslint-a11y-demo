import styles from './my-custom-control.module.scss';

/* eslint-disable-next-line */
export interface MyCustomControlProps {
  "aria-labelledby"?: string;
}

export function MyCustomControl(props: MyCustomControlProps) {
  return (
    <input type="checkbox" aria-labelledby={props['aria-labelledby']}/>
  );
}

export default MyCustomControl;
