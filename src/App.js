import "./App.css";
import {useSelector} from 'react-redux';
import taskList from "./images/task-list.png"
import ToDoAdder from "./components/ToDoAdder";
import ToDoContainer from "./components/ToDoContainer";
import ToDoReminder from "./components/ToDoReminder";
import ToDoMood from "./components/ToDoMood";

function App() {

  const {mood} = useSelector((state)=>{
    return {
        mood: state.mood
    }
});

const {notes} = useSelector((state)=>{
  return {
      notes: state.notes
  }
});

  return <div className="App">

    <div className="app-header">
      <img src={taskList} alt="task list logo" className="logo-img" />
      <h5>ToDoList</h5>
    </div>

    <div className="app-container">
        <ToDoAdder></ToDoAdder>
        <ToDoContainer></ToDoContainer>
        <div style={{
          display:'flex',
        }}>
          <ToDoReminder propNotes = {notes}></ToDoReminder>
          <ToDoMood {...mood}></ToDoMood>
        </div>
        
    </div>
  </div>;
}

export default App;
