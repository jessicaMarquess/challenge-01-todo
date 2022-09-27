import styles from './Checkbox.module.css';
import {  CheckCircle, Circle, Trash } from "phosphor-react";

interface ICheckboxProps {
  label: string;
  onChange: () => void;
  isChecked: boolean;
  onDeleteToDo?: (label: string) => void;
}

const Checkbox = ({ label, onChange, isChecked }: ICheckboxProps ) => {
  return (
    <div className={styles.container}>
      <label>
        <div className={styles.checkbox}>
          {isChecked ? <CheckCircle size={17.45} className={styles.checkCircle} color='var(--purple-dark)'/> : <Circle size={17.45} color='var(--blue-dark)'/>}
        </div>
        <input type="checkbox" checked={isChecked} onChange={onChange} className={styles.test}/>
        {label}
      </label>
      <button>
        <Trash />
      </button>
    </div>
  );
};

export {Checkbox};