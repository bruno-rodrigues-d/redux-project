import './styles/global.css'

import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store";
import { Player } from "./pages/player";

export function App() {
  return (
    // Sempre será necessário envolver os componentes pelo Provider, para receber as informações globais
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}
