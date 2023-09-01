import styles from './TodoLists.module.scss';
import TodoItem from './TodoItem';


/* 
todoObj
data = Array[] todoObj
data = Array<{id=number,task=string,status=Booleam,due_date:string}>

dataRender = Array[]<TodoItem>
*/

function TodoLists(props) {
// CRUD = Create - Read - Update - Datele

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
      {props.data.map( (todoObj) => 
      (<TodoItem 
      key={todoObj.id}
      id={todoObj.id}
      task={todoObj.task} 
      done={todoObj.status} 
      date={todoObj.due_date}/>
    ))}
    </ul>
  );
}

export default TodoLists;
