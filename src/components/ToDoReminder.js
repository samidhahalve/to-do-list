import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Box, Divider, TextareaAutosize, Typography, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';
import {ADD_NOTES, DELETE_NOTES} from '../redux/action';

export default function ToDoReminder(propNotes) {

    const [notes,setNotes] = useState(null);

    const itemRef = useRef();

    const dispatch = useDispatch();

    function setReminder(e){
        setNotes(e.target.value);
    }

    function saveNotes(){
        if(notes){
            dispatch({
                type:ADD_NOTES,
                payload:{
                    notes
                }
            });
        }
    }

    function clearNotes(){
        dispatch({
            type:DELETE_NOTES,
            payload:{
                notes
            }
        })
        setNotes('');
        itemRef.current.value = "";
    }

    return (
        <Box xs={6} style={{
            margin:30,
            padding:20,
            width:'50%',
            backgroundColor:"#FCECDD"
        }}>
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
                <Typography align="left" variant="h6" gutterBottom>Reminder/Note to Self</Typography>
                {notes ? 
                <div style={{
                    display:'flex'
                }}>
                    <IconButton onClick={saveNotes}>
                        <SaveIcon />
                    </IconButton>
                    <IconButton onClick={clearNotes}>
                         <ClearIcon /> 
                    </IconButton>
                </div> : ''}
            </div> 
            <Divider/>
            <TextareaAutosize style={{
                width:'100%',
                backgroundColor:'#FFC288',
                marginTop:20
            }}
            placeholder="Type here" minRows={5} onChange={setReminder} ref={itemRef}>{propNotes.propNotes}</TextareaAutosize>
        </Box>
    )
}
