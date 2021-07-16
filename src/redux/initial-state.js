const initialState = JSON.parse(window.localStorage.getItem("todo-State"))||{
    todos: [
        {
            id:0,
            title:'Learn React',
            completed: false,
            important: true
        },
        {
            id:1,
            title:'Buy Milk',
            completed: false,
            important: false
        },
        {
            id:2,
            title:'Buy medicines',
            completed: true,
            important: false
        },
        {
            id:3,
            title:'Buy books',
            completed: true,
            important: true
        }
    ]
};

export default initialState;