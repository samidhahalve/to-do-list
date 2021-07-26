import React, { useState, useRef} from "react";
import { useDispatch } from  "react-redux";
import { Box, Button, TextField, Paper, Typography } from "@material-ui/core/";
import { ADD_TODO } from '../redux/action';

export default function ToDoAdder() {

  const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        };
   const today = new Date().toLocaleDateString(undefined, options);

  const [title, setTitle] = useState(null);

  const itemRef = useRef(null);

  const dispatch = useDispatch();

  function handleTextchange(e) {
    setTitle(e.target.value);
  }

  function addToDoItem(){
      if(title){
        dispatch({
            type:ADD_TODO,
            payload:{
                title
            }
        });
        setTitle(null);
        itemRef.current.value = "";
      }
  }

  return (
    <div>
        <Paper elevation={0}><Typography variant="h5">{today}</Typography></Paper>
      <Box style={{
          marginTop:20
      }}>
        <TextField
          style={{
              width:400,              
              fontFamily:"Noto Serif JP"
          }}
          label="Add new todo"
          variant="filled"
          onChange={handleTextchange}
          inputRef={itemRef}
        ></TextField>
        <Button 
        style={{
            height:55,
            background:'#FF6701'
        }}
        variant="contained" color="primary" onClick={addToDoItem}>
          Add
        </Button>
      </Box>
    </div>
  );
}
