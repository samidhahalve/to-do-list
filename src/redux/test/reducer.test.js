jest.mock("../initial-state",()=>{
    return {
        initialState: {
            todos:[],
            notes:''
        }    
    };
});

// eslint-disable-next-line import/first
import reducer from '../reducer';

describe("Reducer",()=>{
    beforeEach(()=>{
        global.window = {
            localStorage:{
                setItem: jest.fn(),
            }
        };
    });

    afterEach(()=>{
        global.window=null;
    });

    test("Should add a item todo",()=>{
        

        const initialState={
            todos:[],
            notes:''
        }

        const action = {
            type: "ADD_TODO",
            payload:{
                title:"Read a book"
            }
        };

        const newState = reducer(initialState, action);

        expect(newState.todos[0].title).toEqual("Read a book");
        expect(newState.todos[0].important).toBeFalsy();
        expect(newState.todos[0].completed).toBeFalsy();
    })

    test("should mark todo complete",()=>{
        const initialState={
            todos:[
                {
                    id:'12345',
                    title:"Read a book",
                    important:false,
                    completed:false
                }
            ],
            notes:''
        }

        const action={
            type: 'TOGGLE_COMPLETED',
            payload:{
                id:'12345'
            }
        }

        const newState = reducer(initialState,action);

        expect(newState.todos[0].completed).toBeTruthy();
    })
});