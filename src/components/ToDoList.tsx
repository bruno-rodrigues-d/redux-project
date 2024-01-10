import { useSelector } from "react-redux";

export function ToDoList() {
  const todos = useSelector(store => {
    return store.todo
  })

  return (
    <ul>
      {todos.map(todo => <li key={todo}>{todo}</li>)}
    </ul>
  );
}