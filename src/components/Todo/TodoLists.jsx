import styles from './TodoLists.module.scss';
// import { FaTrashAlt,Fapen } from 'react-icons/fa';
// import { FaHome } from "react-icons/fa";
import { FaTrashAlt,FaPen } from 'react-icons/fa';

function TodoLists() {
  return (
    <ul className={styles.todo__list}>
      <li className={styles.todo}>
        <span className={styles.todo__checkbox}></span>
        <p className={styles.todo__task}>TodoItem 1</p>
        <span className={styles.todo__date}>30 AUG</span>
        <div className={styles.todo__action}>
          <span className={styles.todo__edit}>
            <FaPen/>
          </span>
          <span className={styles.todo__delete}>
            <FaTrashAlt/>
          </span>
        </div>
      </li>
    </ul>
  );
}

export default TodoLists;