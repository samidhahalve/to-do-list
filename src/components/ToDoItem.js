import React from 'react'
import { useDispatch } from "react-redux";
import {Checkbox, FormControlLabel, FormGroup, IconButton, ListItem, Typography, ListItemSecondaryAction} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { TOGGLE_COMPLETED, DELETE_TODO, TOGGLE_IMPORTANT } from "../redux/action";

export default function ToDoItem({id, title, completed, important}) {
    const dispatch = useDispatch();

    function toggleCheckBox(){
        dispatch({
            type:TOGGLE_COMPLETED,
            payload:{
                id,
            }
        })
    }

    function handleDeleteClick(){
        dispatch({
            type:DELETE_TODO,
            payload:{
                id,
            }
        })
    }

    function handleImportantClick(){
        dispatch({
            type:TOGGLE_IMPORTANT,
            payload:{
                id,
            }
        })
    }

    return <ListItem dense>
        <FormGroup>
            <FormControlLabel
            control={
                <Checkbox
                checked={completed}
                name={title}
                color="primary"
                onChange={toggleCheckBox}>
                </Checkbox>
            }
            label={<Typography style={{
                textDecoration: completed && "line-through" 
            }}>{title}</Typography>}
            >
                
            </FormControlLabel>
        </FormGroup>
        <ListItemSecondaryAction>
            <IconButton onClick={handleImportantClick}>
                {important ? <StarIcon />: <StarBorderIcon/>}
            </IconButton>
            <IconButton onClick={handleDeleteClick}>
                <Delete />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}
