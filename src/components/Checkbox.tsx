import styles from './Checkbox.module.css';
import {  CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from 'react';

interface ICheckboxProps {
  label: string;
  onDeleteToDo: (label: string) => void;
}

const Checkbox = ({ label,  onDeleteToDo }: ICheckboxProps ) => {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleChecked = () => {
    setIsChecked(prev=> !prev);
  };

  const handleDeleteComment = () => onDeleteToDo(label);

  return (
    <div className={styles.container}>
      <label className={`${isChecked && styles.isLine}`}>
        <div className={styles.checkbox}>
          {isChecked ? <CheckCircle size={17.45} className={styles.checkCircle} color='var(--purple-dark)'/> : <Circle size={17.45} color='var(--blue-dark)'/>}
        </div>
        <input type="checkbox" onChange={handleChecked} />
        {label}
      </label>
      <button onClick={handleDeleteComment}>
        <Trash />
      </button>
    </div>
  );
};

export {Checkbox};