import styles from './my-custom-label.module.scss';

/* eslint-disable-next-line */
export interface MyCustomLabelProps {
  label: string;
  id?: string;
}

export function MyCustomLabel(props: MyCustomLabelProps) {
  return (
    <label id={props.id}>{props.label}</label>
  );
}

export default MyCustomLabel;
