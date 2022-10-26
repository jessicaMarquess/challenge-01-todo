import styles from './ListToDo.module.css';

import { Checkbox } from './Checkbox';
import { PlusCircle } from 'phosphor-react';
import { FormEvent, Fragment, useState } from 'react';
import { NotToDoList } from './NotToDoList';

const ListToDo = () => { 
  const [toDo, setToDo] = useState<String[]>([]);
  const [newToDo, setNewToDo] = useState('');
  
  const handleNewToDo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToDo([...toDo, newToDo]);
    setNewToDo('');
  };

  const deleteTodo = (toDoDelete: string) => {
    const toDoWithoutDeletedOne = toDo.filter(todo => {
      return todo !== toDoDelete;
    });
    setToDo(toDoWithoutDeletedOne); 
  };
  
  return (
   <>
    <div id='area-new-todo-application'>
     <form id='form-new-todo' onSubmit={e => handleNewToDo(e)} className={styles.formTodo}>
        <input 
          id='input-todo'
          className={styles.inputAdd}
          placeholder='Adicione uma nova tarefa'
          type='text'

          onChange={(e) => setNewToDo(e.target.value)}
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
     <section>
     <div className={styles.container}>
     <div>
        <p>Tarefas criadas <span className={styles.infoCount}>{`${toDo.length}`}</span></p>
      </div>
      <div>
        <p>
          Concluídas <span className={styles.infoCount}>{`... de ${toDo.length}`}</span>
        </p>
      </div>
     </div>
    </section>
    { toDo.length === 0 && <NotToDoList /> }
    { toDo.map(item =>  {
      return (
        <Fragment key={`${item}`}>
          <Checkbox
            label={`${item}`}
            onDeleteToDo={deleteTodo}
          />
        </Fragment>
      )})}
   </>
  )
};

export { ListToDo };