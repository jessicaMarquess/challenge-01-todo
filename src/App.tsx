import { Header } from "./components/Header";
import { ListToDo } from "./components/ListToDo";
import { NewToDo } from "./components/NewToDo";
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <NewToDo />
      <ListToDo />
    </div>
  )
}

export default App
