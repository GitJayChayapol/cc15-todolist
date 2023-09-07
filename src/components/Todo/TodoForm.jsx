import { useState } from 'react';
import styles from './TodoForm.module.scss';
import {Button} from '../Common/Button/Button';
import useTodo from '../../hooks/useTodo';

function TodoForm(props) {
  const [isError,setIsError] = useState(false);
  const [taskInput,setTaskInput] = useState(props.oldTodo?.task || '');
  const {addTodo,editTodo} = useTodo()

  const handleChangeInput = function (event) {
    if(isError) setIsError(false);
    setTaskInput(event.target.value)
  }
  const handleSubmit = function (event) {
    event.preventDefault()
    if(taskInput.trim() ==='') {
      setIsError(true);
      return;
    }
    if(props.oldTodo) editTodo(props.oldTodo.id, {task: taskInput});
    else addTodo(taskInput)
    props.setIsOpenForm(false)
  };

  const handleCannel = function () {
    props.setIsOpenForm(false)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.todo__form__container}>
      <input className={styles.todo__form__input} placeholder='Task Name' value={taskInput} onChange={handleChangeInput}/>
      <div className={styles.todo__form__footer}>
        {isError ? <p className={styles.todo__error}>Title is required</p> : null}
        <div className={styles.todo__form__buttons}>
          <Button text = 'Cancel' active = {false} type='button' onClick={handleCannel}/>
          <Button text = {props.textSubmit} active = {true} type='submit'/>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
