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
    ],
    notes:'Hello default notes',
    mood:[
        {
            moodID:'happy',
            moodStatus:false
        },
        {
            moodID:'sad',
            moodStatus:false
        },
        {
            moodID:'meh',
            moodStatus:false
        },
        {
            moodID:'fine',
            moodStatus:false
        },
        {
            moodID:'angry',
            moodStatus:false
        }
    ]
};

export default initialState;