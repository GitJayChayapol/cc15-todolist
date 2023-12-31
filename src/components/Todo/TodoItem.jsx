import styles from './TodoItem.module.scss';
import { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import TodoForm from './TodoForm';

//Object Destructuring (Props)
// function TodoItem(props) {
// const {task,done,date} = props;

function TodoItem({id,task,done,date,deleteTodo,editTodo}) {
const [isOpenForm,setIsOpenForm] = useState(false)
const listClick = function (event) {
    setIsOpenForm(!isOpenForm)
        }
const toggleStatus = () => {
  const updateTodoObj = {id,task,date,status:!done};
  editTodo(id,updateTodoObj)
};
  return (
    <>
    {isOpenForm? (
    <TodoForm 
    textSubmit = 'Edit Task' 
    setIsOpenForm={setIsOpenForm}
    editTodo={editTodo}
    oldTodo={{id,task,done,date}} 
    />) : 
      (<li className={styles.todo}>
        <div className={`${styles.todo__checkbox} ${done ? styles.todo__checkbox__done:''}`}>
          <HiOutlineCheck className={styles.todo__checkbox__icon} onClick={toggleStatus} />
        </div>
        <p className={`${styles.todo__task} ${done ? styles.todo__task__done : ''}`}>{task}</p>
        <span className={styles.todo__date}>{date}</span>
        <div className={styles.todo__action}>
          <span>
            <FaPen className={styles.todo__edit} onClick = {listClick}/>
          </span>
          <span>
            <FaTrashAlt className={styles.todo__delete} onClick={()=>deleteTodo(id)}/>
          </span>
        </div>
      </li>)}
    </>
  )
}

export default TodoItem;