import initialState from "./initial-state";
import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO, TOGGLE_IMPORTANT , ADD_NOTES, DELETE_NOTES, TOGGLE_MOOD} from "./action";
import shortid from "shortid";

function saveStatePersistant(state){
    window.localStorage.setItem("todo-State",JSON.stringify(state));
}

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO: {
        const {title} = action.payload;

        const newState = {
            ...state,
            todos: [...state.todos,
            {
                id:shortid(),
                title,
                completed:false,
                important:false
            }],
        };
        saveStatePersistant(newState);
        return newState;
    }

        case TOGGLE_COMPLETED:{
            const newToDos = state.todos.map((todo)=>{
                if(todo.id === action.payload.id){
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            const newState = {
                ...state,
                todos:newToDos,
            };
            saveStatePersistant(newState);
            return newState;
        }

        case DELETE_TODO:{
            const {id} = action.payload;

            const newTodos = state.todos.filter((todo)=> todo.id!==id);

            const newState = {
                ...state,
                todos:newTodos,
            }
            saveStatePersistant(newState);
            return newState;
        }

        case TOGGLE_IMPORTANT:{
            const newToDos = state.todos.map((todo)=>{
                if(todo.id === action.payload.id){
                    todo.important = !todo.important;
                }
                return todo;
            });
            const newState = {
                ...state,
                todos:newToDos,
            };
            saveStatePersistant(newState);
            return newState;
        }

        case ADD_NOTES:{
            const newNotes = action.payload.notes;

        const newState = {
            ...state,
            notes: newNotes
        };
        saveStatePersistant(newState);
        return newState;
        }

        case DELETE_NOTES:{

            const newState = {
                ...state,
                notes:'',
            }
            saveStatePersistant(newState);
            return newState;
        }

        case TOGGLE_MOOD:{
            const newMood = state.mood.map((mood)=>{
                if(mood.moodID === action.payload.selectedMood){
                    mood.moodStatus = !mood.moodStatus;
                }
                return mood;
            });
            const newState = {
                ...state,
                mood:newMood,
            };
            saveStatePersistant(newState);
            return newState;
        }

         default: return state;
    }
}

export default  reducer;