import { Box, Typography, Divider, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import {TOGGLE_MOOD} from '../redux/action';
import {useDispatch} from 'react-redux';
import blankHappy from "../images/blank-happy.png";
import colorHappy from "../images/color-happy.png";
import blankSad from "../images/blank-sad.png";
import colorSad from "../images/color-sad.png";
import blankMeh from "../images/blank-meh.png";
import colorMeh from "../images/color-meh.png";
import blankFine from "../images/blank-fine.png";
import colorFine from "../images/color-fine.png";
import blankAngry from "../images/blank-angry.png";
import colorAngry from "../images/color-angry.png";

const useStyles = makeStyles(()=>({
    root:{
        margin:30,
        padding:20,
        width:'50%',
        backgroundColor:"#FCECDD"
    },
    gridWrapper:{
        marginTop:20,
        justifyContent:'center'
    },
    icon:{
        width:30,
    },
    iconWrapper:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        borderRadius: '50%',
        cursor:'pointer',
    }
}));


export default function ToDoMood(mood) {

    const classes = useStyles();

    const dispatch = useDispatch();

    function toggleMood(e){
        const selectedMood = e.target.name;
        dispatch({
            type:TOGGLE_MOOD,
            payload:{
                selectedMood
            }
        })
    }

    function IconList(){
        var moodArr = [];
        Object.keys(mood).forEach(function(key) {
            moodArr.push(mood[key]);
            });
        return(
            <Grid className={classes.gridWrapper} container spacing={2}>
                {moodArr.map(item => (
                     <IconMember key={item.moodID} item={item}/>
                ))}
            </Grid>
        )
    }

    function IconMember({item}){
        return (
            <Grid item xs={2} className={classes.iconWrapper} onClick={toggleMood} key={item.moodID}>
                     {item.moodStatus ? <img className={classes.icon} src={item.moodID==='happy' ? colorHappy : (item.moodID==='sad' ? colorSad: (item.moodID ==='meh' ? colorMeh : (item.moodID ==='fine' ? colorFine : colorAngry) ))}  name={item.moodID} alt={item.moodID}></img> : <img className={classes.icon} src={item.moodID==='happy' ? blankHappy : (item.moodID==='sad' ? blankSad: (item.moodID ==='meh' ? blankMeh : (item.moodID ==='fine' ? blankFine : blankAngry) ))}  name={item.moodID} alt={item.moodID}></img> }
                     <Typography align="left" variant="h6" gutterBottom>{item.moodID}</Typography>
                 </Grid>
        )
    }

    return (
        <Box xs={6} className={classes.root}>
            <Typography align="left" variant="h6" gutterBottom>Today's Mood</Typography>
            <Divider></Divider>
            <IconList moodList={mood}></IconList>
            
        </Box>
    )
}
