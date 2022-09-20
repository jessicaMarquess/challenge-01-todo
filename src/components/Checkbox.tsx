import styles from './Checkbox.module.css';
import { Check, CheckCircle, Circle, Trash } from "phosphor-react";

interface ICheckboxProps {
  label: string;
  value: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, value, onChange }: ICheckboxProps ) => {
  return (
    <div className={styles.container}>
      <label>
        <div className={styles.checkbox}>
          {value ? <CheckCircle size={17.45} className={styles.checkCircle} color='var(--purple-dark)'/> : <Circle size={17.45} color='var(--blue-dark)'/>}
        </div>
        <input type="checkbox" checked={value} onChange={onChange} className={styles.test}/>
        {label}
      </label>
      <Trash />
    </div>
  );
};

export {Checkbox};