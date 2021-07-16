import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Box, Grid, Typography, Divider, List} from '@material-ui/core';
import ToDoItem from './ToDoItem';

const useStyles = makeStyles(()=>({
    root:{
        margin:30,
        padding:20,
        background:'#FCECDD'
    }
}));

export default function ToDoContainer() {
    const classes = useStyles();

    const { todos }  = useSelector((state)=>{
        return {
            todos: state.todos,
        }
    });

    const prioritizeTodo = (function prioritise(){
        const impTodos  = [...todos];
        impTodos.sort((el1,el2)=>{
            if(el1.important && !el2.important){
                return -1;
            }else{
                return 1;
            }
        })
        return impTodos;
    })();

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>Pending Todos</Typography>
                    <Divider/>
                    <List>
                        {prioritizeTodo.map((todo) => {
                            if(!todo.completed){
                                return <ToDoItem {...todo}></ToDoItem>
                            }else{
                                return null;
                            }
                        })}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>Completed Todos</Typography>
                    <Divider/>
                    <List>
                        {prioritizeTodo.map((todo) => {
                            if(todo.completed){
                                return <ToDoItem {...todo}></ToDoItem>
                            }else{
                                return null;
                            }
                        })}
                    </List>
                </Grid>
            </Grid>

        </Box>
    )
}
