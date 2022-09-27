import styles from './NewToDo.module.css';

import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';

const NewToDo = () => {
  const [ toDo, setToDo ] = useState<String[]>([]);
  const [newToDo, setNewToDo] = useState('');

  const handleCreateNewToDo = (event: FormEvent) => {
    event.preventDefault();
    
    setToDo([ ...toDo, newToDo]);
    setNewToDo('');
  }

  return (
    <div id='area-new-todo-application'>
     <form id='form-new-todo' onSubmit={handleCreateNewToDo} className={styles.formTodo}>
        <input 
          id='input-todo'
          className={styles.inputAdd}
          placeholder='Adicione uma nova tarefa'
          type='text'
          value={newToDo}
          required  
        />
        <button 
          id='button-submit-todo'
          className={styles.buttonCreate}
          type='submit'
        >
          <span className={styles.textButtonCreate}>Criar</span> 
          <PlusCircle/>
        </button>
      </form>
    </div>
  )
}

export {NewToDo};
