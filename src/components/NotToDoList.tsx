import styles from './NotToDoList.module.css';

import clipboard from '../assets/clipboard.png';

const NotToDoList = () => {
  return (
    <>
      <div className={styles.listToDo}>
        <div className={styles.content}>
          <img src={clipboard} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </>
  )
}

export { NotToDoList };