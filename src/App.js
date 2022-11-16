import "./App.scss";
import AddToDoForm from "./components/AddToDoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

function App() {
  return (
    <div className="App">
      <h2>Todo List</h2>
      <AddToDoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;
