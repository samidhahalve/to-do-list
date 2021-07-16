import "./App.css";
import taskList from "./images/task-list.png";
import ToDoAdder from "./components/ToDoAdder";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return <div className="App">

    <div className="app-header">
      <img src={taskList} alt="task list logo" className="logo-img" />
      <h5>ToDoList</h5>
    </div>

    <div className="app-container">
        <ToDoAdder></ToDoAdder>
        <ToDoContainer></ToDoContainer>
    </div>
  </div>;
}

export default App;
