import React, { useState } from 'react';
import styles from '../Todo/TodoLists.module.scss'
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import TodoForm from './TodoForm';

function SubTodoList(props) {
    console.log(props)
    const [isOpenForm,setIsOpenForm] = useState(false)
    const listClick = function (event) {
      setIsOpenForm(!isOpenForm)
    }
    return (
      <ul className={styles.todo__lists}>
      {isOpenForm? (<TodoForm textSubmit = 'Edit Task' setIsOpenForm={setIsOpenForm}/>) : 
        (<li className={styles.todo}>
          <div className={`${styles.todo__checkbox} ${styles.todo__checkbox__done}`}>
            <HiOutlineCheck className={styles.todo__checkbox__icon} />
          </div>
          <p className={`${styles.todo__task} ${styles.todo__task__done}`}>{props.el} </p>
          <span className={styles.todo__date}>30 Aug</span>
          <div className={styles.todo__action}>
            <span>
              <FaPen className={styles.todo__edit} onClick = {listClick} />
            </span>
            <span>
              <FaTrashAlt className={styles.todo__delete} />
            </span>
          </div>
        </li>)}
      </ul>
    );
  }
export default SubTodoList;