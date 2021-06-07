import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useAuth } from "./context/StudentContext"
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            margin: '8px 0',
        },
    },
    title: {
        fontFamily: 'system-ui',
        fontWeight: 100,
        color: '#fff',
        textAlign: 'center'
    },
    button: {
        width: '90px',
        margin: '10px',
        borderRadius: '100px'
    },
    buttonGroup:{
        display:'flex',
        justifyContent:'space-between'
    }
}));

export default function Home() {
    const classes = useStyles();
    const { Addstudent, clearStudent,EditStudent, editItem} = useAuth()
    const [title, setTitle] = useState()
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handlesubmit = (event) => {
        event.preventDefault()
        if(!editItem){
            Addstudent(title)
            setTitle('')
        }else{
            EditStudent(title,editItem.id)
        }
        
        //console.log(Addstudent)
    }
    useEffect(() => {
     if(editItem){
        setTitle(editItem.title)
     }else{
        setTitle('')
     }
    }, [editItem])
    return (
        <div>
            <h1 className={classes.title}>Student List (Context API)</h1>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handlesubmit}>
                <TextField
                    value={title}
                    id="outlined-basic"
                    placeholder="Your title..."
                    variant="outlined"
                    onChange={handleChange}
                    required
                />
                <div className={classes.buttonGroup}>
                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                   {editItem? 'Edit':'Add'}
                </Button>
                <Button variant="contained" color="secondary" className={classes.button} onClick={clearStudent}>
                    Clear
                </Button>
                </div>
            </form>
        </div>

    );
}
