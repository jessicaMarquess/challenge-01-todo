import styles from './NewToDo.module.css';

import { PlusCircle } from 'phosphor-react';

const NewToDo = () => {
  return (
    <div id='area-new-todo-application'>
     <form id='form-new-todo' onSubmit={() => alert("Enviado minha linda")} className={styles.formTodo}>
        <input 
          id='input-todo'
          className={styles.inputAdd}
          name='textToDo' 
          placeholder='Adicione uma nova tarefa'
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
