import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

function useTodo() {
  const sharedObj = useContext(TodoContext);
  return sharedObj;
}

export default useTodo;
