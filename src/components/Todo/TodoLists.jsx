import styles from './TodoLists.module.scss';
import TodoItem from './TodoItem';
import { useState } from 'react';

/* 
todoObj
data = Array[] todoObj
data = Array<{id=number,task=string,status=Booleam,due_date:string}>

dataRender = Array[]<TodoItem>
*/
const data = [
  { id: 1, task: "Suspendisse potenti.", status: false, due_date: "2023-04-26" },
  {
      id: 2,
      task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      status: false,
      due_date: '2023-05-08'
  },
  {
      id: 3,
      task: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
      status: false,
      due_date: '2023-04-30',
  },
];
function TodoLists() {
// CRUD = Create - Read - Update - Datele
const [allTodos,setAllTodos] = useState(data)

  // const dataRender = data.map( (todoObj) => <TodoItem 
  // key={todoObj.id}
  // task={todoObj.task} 
  // done={todoObj.status} 
  // date={todoObj.due_date}/>)

  return (
    // <ul className={styles.todo__lists}>
    //   {dataRender}
    // </ul>
    <ul className={styles.todo__lists}>
      {allTodos.map( (todoObj) => 
      (<TodoItem 
      key={todoObj.id}
      task={todoObj.task} 
      done={todoObj.status} 
      date={todoObj.due_date}/>
    ))}
    </ul>
  );
}

export default TodoLists;
