import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './TodoForm.module.scss';
import {Button} from '../Common/Button/Button';
/* 
  props = {
    textSubmit : String
  }
*/
/* 
  CC1 - Form Handle
- ใช้ Funciton ไปผูกกับ Event ชื่อ Submit
- Function จะถูก Browser เรียกใช้ โดยส่ง Parameter มา 1 ตัว (event Object)
- โดย default ทุกปุ่มใน <form> จะทำห้าที่ submit
- ## แก้โดยการกำหนด Type ของปุ่ม
  - type='submit' <button type='submit'>2</button>
  - type='button' <button type='button'>1</button>
*/

/* 
props = {
  textSubmit : string
  setIsOpenForm : FN
}
*/

function TodoForm(props) {
  const [isError,setIsError] = useState(false);
  const [taskInput,setTaskInput] = useState(props.oldTodo?.task || '');

  const handleChangeInput = function (event) {
    // console.log('user typing...',event.target.value)
    if(isError) setIsError(false);
    setTaskInput(event.target.value)
  }
// 2 MODE => Add or Edit
  const handleSubmit = function (event) {
    event.preventDefault()
    // 3.FormValidation
    // case1 : submit ได้ => ไม่ Error
    // case2 : submit ไม่ได้ => Error
    if(taskInput.trim() ==='') {
      setIsError(true);
      return;
    }
    if(props.addTodo) props.addTodo(taskInput);
    else if (props.editTodo && props.oldTodo){
      props.editTodo(props.oldTodo.id, {task: taskInput});
    }
    // else if (props.editTodo) props.editTodo(id,updateTodoObj)
    props.setIsOpenForm(false)
  };

  const handleCannel = function () {
    // console.log('cancel')
    // correctName : setIsOpenForm(false)
    // inCorrectName : undefined(false) => Boommmm เป็น โกโก้ครั้นน
    props.setIsOpenForm(false)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.todo__form__container}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' value={taskInput} onChange={handleChangeInput}/>

      {/*Form Footer */}
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
