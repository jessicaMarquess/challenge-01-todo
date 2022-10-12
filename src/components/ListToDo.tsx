import styles from './ListToDo.module.css';

import { useState } from 'react';
import { Checkbox } from './Checkbox';
import { NewToDo } from './NewToDo';



const ListToDo = () => { 
  const [checked, setChecked] = useState(false);

  
  const handleChange = () => {
    setChecked(!checked);
  };
  
  return (
   <>
    <NewToDo />
     <header >
     <div className={styles.container}>
     <div>
        <p>Tarefas criadas <span className={styles.infoCount}>1</span></p>
      </div>
      <div>
        <p>
          Concluídas <span className={styles.infoCount}>1</span>
        </p>
      </div>
     </div>
    </header>
    <div>
      <Checkbox
        label="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        isChecked={checked}
        onChange={handleChange}
      />
    </div>
   </>
  )
};

export { ListToDo };