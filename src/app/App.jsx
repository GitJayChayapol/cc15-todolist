// Dependencies
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';
import { useState , useEffect } from 'react';
import dayjs from 'dayjs'

const END_PONINT = 'http://localhost:8080/api/todos'

function App() {
  const [allTodos,setAllTodos] = useState([]);

  useEffect (() => {
// fetch Alltodo
      async function fetchAllTodo () {
        try {
          let response = await fetch('http://localhost:8080/api/todos',{method: 'GET'})
          let todoData = await response.json()
          const newTodoLists = todoData.todos.map((todo) => {
            const newTodo = {...todo,due_date: todo.date};
            delete todo.date;
            return newTodo
          })
          setAllTodos(newTodoLists)
        } catch (err) {
          console.log(err)
        }
      }
      fetchAllTodo();
  },[])
  const addTodo =  async function (taskName) {
    const newTodo = {
      task: taskName,
      status: false,
      due_date: dayjs().format('YYYY-MM-DD'),
    }
    try {
      // SEND REQUEST : POST
      // WAIT RESOPNSE
      let resonse = await fetch ( END_PONINT , {method:'POST',headers : {'content-type' : 'application/json'},body:JSON.stringify(newTodo)})
      let data = await resonse.json()
      const createdTodo = {...data.todo, due_date: data.todo.date};
      delete createdTodo.date;
      // UPDATE STATE
      setAllTodos((p)=>[createdTodo,...p])
    } catch (error) {
      console.log(error)
    }

  }
  const deleteTodo = async function (todoId) {
    try {
      const options = {method:'DELETE'}
      let resonse = await fetch (`${END_PONINT}/${todoId}`,options)
      // let data = await resonse.json()
      if ( resonse.status === 204) {

        setAllTodos(allTodos.filter((obj)=> obj.id !== todoId))
      }
    } catch (err) {
      console.log(err)
    }
  }
  const editTodo = async function (todoId,updateTodoObj) {
  // Practice 1
  //  let foundedTod = allTodos.find((todo) => todo.id === todoId)
  //  if (!foundedTod) return;
  //  const newTodo = Object.assign({},foundedTod,newTodo);

  //  let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId)
  //  if(foundedIndex === -1) return

  //  const newTodoList = [...allTodos]
  //  newTodoList.splice(foundedIndex,1,newTodo)
  //  setAllTodos(newTodoList)
   // Practice 2
  //  const newTodoList = allTodos.map(function(todo) {
  //   if(todo.id != todoId) return todo;
  //   else return {...todo,updateTodoObj};
  //  });
  //  setAllTodos(newTodoList);
  // };
  // Practice 3
  // const newTodoList = allTodos.reduce((acc,todo) => {
  //   if(todo.id != todoId) acc.push(todo);
  //   else acc.push({...todo,...updateTodoObj});
  //   return acc;
  // },[])
  // setAllTodos(newTodoList) 

  try {
    // FindTodo
    let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId);
    if (foundedIndex !== -1) {
      // updateTodo
      const updatedTodo = { ...allTodos[foundedIndex], ...updateTodoObj };
      updatedTodo.date = updatedTodo.due_date;
      const options = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      };
      const response = await fetch(`${END_PONINT}/${todoId}`, options);
      const data = await response.json();

      // UpdateState
      const newTodoLists = [...allTodos];
      newTodoLists[foundedIndex] = {...data.todo, due_date: data.todo.date};
      setAllTodos(newTodoLists);
    }
  } catch (error) {
    console.log(error);
  }
  }
  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate addTodo={addTodo} />
          <TodoLists data={allTodos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </main>
      </div>
    </div>
  );
}

export default App;
