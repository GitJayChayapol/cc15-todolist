import styles from './TodoLists.module.scss';
import TodoItem from './TodoItem';
import useTodo from '../../hooks/useTodo';

function TodoLists() {
  const { allTodos } = useTodo()

  return (
    <ul className={styles.todo__lists}>
      {allTodos.map( (todoObj) => 
      (<TodoItem 
      key={todoObj.id}
      id={todoObj.id}
      task={todoObj.task} 
      done={todoObj.status} 
      date={todoObj.due_date}
      />
    ))}
    </ul>
  );
}

export default TodoLists;
