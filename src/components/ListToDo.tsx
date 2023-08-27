import styles from './ListToDo.module.css';

import { CheckCircle, Circle, PlusCircle, Trash } from 'phosphor-react';
import { FormEvent, Fragment, useEffect, useState } from 'react';
import { NotToDoList } from './NotToDoList';

interface ToDoProps {
  id: number;
  title: string;
  isChecked: boolean;
}

const ListToDo = () => {
  const [toDo, setToDo] = useState<ToDoProps[]>(() => {
    const cachedToDo = localStorage.getItem('cachedToDo');
    return cachedToDo ? JSON.parse(cachedToDo) : [];
  });
  const [newToDo, setNewToDo] = useState('');

  const handleNewToDo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newToDo) return;
    const newTask = {
      id: Math.random(),
      title: newToDo,
      isChecked: false
    };

    setToDo(prev => [...prev, newTask]);
    setNewToDo('');
  };

  const deleteToDo = (id: number) => {
    const toDoWithoutDeletedOne = toDo.filter(toDo => {
      return toDo.id !== id;
    });
    setToDo(toDoWithoutDeletedOne);
  };

  const handleChecked = (id: number) => {
    const updateTask = toDo.map(task => task.id === id ? {
      ...task,
      isChecked: !task.isChecked,
    } : task);
    setToDo(updateTask);
  };

  const countCompleted = toDo.filter(task => task.isChecked === true);

  useEffect(() => {
    localStorage.setItem('cachedToDo', JSON.stringify(toDo));
  }, [toDo]);

  return (
    <>
      <div id='area-new-todo-application'>
        <form id='form-new-todo' onSubmit={(e) => handleNewToDo(e)} className={styles.formTodo}>
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
            <PlusCircle />
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
              Concluídas <span className={styles.infoCount}>{toDo.length === 0 ? 0 : `${countCompleted.length} de ${toDo.length}`}</span>
            </p>
          </div>
        </div>
      </section>
      {toDo.length === 0 && <NotToDoList />}
      {toDo.map(item => {
        return (
          <Fragment key={`${item.id}`}>
            <div className={styles.containerChecked}>
              <label className={`${item.isChecked && styles.isLine}`}>
                <div className={styles.checkbox}>
                  {item.isChecked ? (
                    <CheckCircle
                      size={17.45}
                      className={styles.checkCircle}
                      color="var(--purple-dark)"
                    />
                  ) : (
                    <Circle size={17.45} color="var(--blue-dark)" />
                  )}
                </div>
                <input type="checkbox" checked={item.isChecked} onChange={() => handleChecked(item.id)} />
                {item.title}
              </label>
              <button onClick={() => deleteToDo(item.id)}>
                <Trash />
              </button>
            </div>
          </Fragment>
        )
      })}
    </>
  )
};

export { ListToDo };