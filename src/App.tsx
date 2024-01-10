import { Provider as ReduxProvider } from "react-redux";

import { AddToDo } from "./components/AddToDo";
import { ToDoList } from "./components/ToDoList";
import { store } from "./store";

export function App() {
  return (
    // Sempre será necessário envolver os componentes pelo Provider, para receber as informações globais
    <ReduxProvider store={store}>
      <ToDoList />
      <AddToDo />
    </ReduxProvider>
  )
}
