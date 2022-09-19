import styles from './ListToDo.module.css';

import clipboard from '../assets/clipboard.png';

const ListToDo = () => {
  return (
   <>
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
    <div className={styles.listToDo}>
      <div className={styles.content}>
        <img src={clipboard} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
   </>
  )
};

export { ListToDo };