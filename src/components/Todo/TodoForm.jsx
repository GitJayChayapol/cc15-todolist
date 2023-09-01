import { useState } from 'react';
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
  const [taskInput,setTaskInput] = useState('');

  const handleChangeInput = function (event) {
    // console.log('user typing...',event.target.value)
    if(isError) setIsError(false);
    setTaskInput(event.target.value)
  }

  const handleSubmit = function (event) {
    event.preventDefault()
    // ต้องรู้ก่อนว่า User พิมอะไร (อยู่ใน state : taskInput)
    // FormValidation
    // case1 : submit ได้
    // case2 : submit ไม่ได้ => แสดง Error

    // 3.FormValidation
    // case1 : submit ได้ => ไม่ Error
    // case2 : submit ไม่ได้ => Error
    if(taskInput.trim() ==='') {
      console.log('Error')
      setIsError(true);
      return;
    }
    console.log('create new Todo')
    const newTodo = {id: props.data.length + 1 ,task:taskInput,status:false,due_date:'1 Sep 2023'}
    const newTodoList = [newTodo, ...props.data]
    props.setTodo(newTodoList)
    props.setIsOpenForm(false)
  }

  const handleCannel = function () {
    console.log('cancel')
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
          {/* <button type='button'>1</button>
          <button type='submit'>2</button> */}
          {/* <button>Cancel</button>
          <button>Add Task</button> */}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
