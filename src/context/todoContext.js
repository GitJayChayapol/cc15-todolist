import { createContext } from "react";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

const TodoContext = createContext();
const END_PONINT = "http://localhost:8080/api/todos";

function TodoContextProvider(props) {
  const [allTodos, setAllTodos] = useState([]);

  async function fetchAllTodo() {
    try {
      let response = await fetch("http://localhost:8080/api/todos", {
        method: "GET",
      });
      let todoData = await response.json();
      const newTodoLists = todoData.todos.map((todo) => {
        const newTodo = { ...todo, due_date: todo.date };
        delete todo.date;
        return newTodo;
      });
      setAllTodos(newTodoLists);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchAllTodo();
  }, []);
  const addTodo = async function (taskName) {
    const newTodo = {
      task: taskName,
      status: false,
      due_date: dayjs().format("YYYY-MM-DD"),
    };
    try {
      let resonse = await fetch(END_PONINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      let data = await resonse.json();
      const createdTodo = { ...data.todo, due_date: data.todo.date };
      delete createdTodo.date;
      setAllTodos((p) => [createdTodo, ...p]);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async function (todoId) {
    try {
      const options = { method: "DELETE" };
      let resonse = await fetch(`${END_PONINT}/${todoId}`, options);
      if (resonse.status === 204) {
        setAllTodos(allTodos.filter((obj) => obj.id !== todoId));
      }
    } catch (err) {
      console.log(err);
    }
  };
  const editTodo = async function (todoId, updateTodoObj) {
    try {
      let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId);
      if (foundedIndex !== -1) {
        const updatedTodo = { ...allTodos[foundedIndex], ...updateTodoObj };
        updatedTodo.date = updatedTodo.due_date;
        const options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updatedTodo),
        };
        const response = await fetch(`${END_PONINT}/${todoId}`, options);
        const data = await response.json();

        const newTodoLists = [...allTodos];
        newTodoLists[foundedIndex] = { ...data.todo, due_date: data.todo.date };
        setAllTodos(newTodoLists);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sharedObj = { allTodos, deleteTodo, editTodo, fetchAllTodo, addTodo };
  return (
    <TodoContext.Provider value={sharedObj}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
export { TodoContext };
