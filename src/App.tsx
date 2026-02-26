import "./App.css";
import { Counter } from "./components/counter/Counter";
import { TodoList } from "./components/todoList/TodoList";

function App() {
  return (
    <>
      <h1>Test page</h1>
      <div className="card">
        <Counter />
      </div>
      <div className="card">
        <TodoList />
      </div>
    </>
  );
}

export default App;
