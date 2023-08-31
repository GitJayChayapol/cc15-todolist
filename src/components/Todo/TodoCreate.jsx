import styles from './TodoCreate.module.scss';
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import TodoForm from './TodoForm'
import { useState } from 'react';

/*
Condition Rendering
-Default : Show Button & Text
-Active : Show TodoForm
*/

// Concept : true ? (<AddTask>) : (<TodoForm>)

//  CC2 - Event Handling เอาฟังก์ชั่นไปผูกติดกับ UI เพื่อให้ User เป็นคนเรียกใช้ฟังก์ชั่นเอง
// onClick : ต้อ Click ก่อน ฟังก์ชั่น ถึงจะ Run
//  - หาก User ทำการคลิก
//  - Brower จะเป็นคนเรียกใช้ Function โดยส่ง Parameter มา 1 ตัว handleClick(eventObject)
/* 
CC3 - JS Value ไม่สามารถทำให้ React Render ได้
ต้องใช้ state

CC4 Array Destructuring
function myUseStaet(inittal){
  return [inittal,9]
}
let [a,b] = myUseState
a === 5
b === 9
*/

/*
CC5 - React State (หนึ่งในฟังก์ชั่นของกลุ่ม React Hook)
const [state,setState]= useState(initialState:any)
element 1: current State
element 2: Function สำหรับ Usestate
เมื่อ State เปลี่ยน Function Component จะ Render
Rerender == Code ทั้งหมดใน Function จะถูก run ใหม่อีก 1 ครั้ง
*/

// 1. Function Component
function TodoCreate() {
// HOOK FN
  const [isOpenForm,setIsOpenForm] = useState(false)

  // let active = false;

// 2. JS Function (logic)
  const handleClick = function (event) {
    setIsOpenForm(!isOpenForm)
  //   active = !active;
  //   console.log('Clicked',active);
  };

  return (
    <>
    {isOpenForm ? 
    (<TodoForm/>) : 
    (<div className={styles.todo__create} onClick={handleClick}>
      <div className={styles.todo__create__button}>
        <HiPlus />
      </div>
      <h3 className={styles.todo__create__text}>Add Task</h3>
    </div>)}
    </>
  );
}

export default TodoCreate;
