import styles from './TodoItem.module.scss';
import { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import TodoForm from './TodoForm';


//Object Destructuring (Props)
// function TodoItem(props) {
// const {task,done,date} = props;

function TodoItem({id,task,done,date}) {
const [isOpenForm,setIsOpenForm] = useState(false)
// console.log(id)
const listClick = function (event) {
    setIsOpenForm(!isOpenForm)
        }
  return (
    <>
    {isOpenForm? (<TodoForm textSubmit = 'Edit Task' setIsOpenForm={setIsOpenForm}/>) : 
      (<li className={styles.todo}>
        <div className={`${styles.todo__checkbox} ${done ? styles.todo__checkbox__done:''}`}>
          <HiOutlineCheck className={styles.todo__checkbox__icon} />
        </div>
        <p className={`${styles.todo__task} ${done ? styles.todo__task__done : ''}`}>{task}</p>
        <span className={styles.todo__date}>{date}</span>
        <div className={styles.todo__action}>
          <span>
            <FaPen className={styles.todo__edit} onClick = {listClick} />
          </span>
          <span>
            <FaTrashAlt className={styles.todo__delete} />
          </span>
        </div>
      </li>)}
    </>
  )
}

export default TodoItem;