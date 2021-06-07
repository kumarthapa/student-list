import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAuth } from "./context/StudentContext"
const useStyles = makeStyles((theme) => ({
    button: {
        margin: '5px',
        color: '#fff',
        cursor: 'pointer'
    },
    studentList:{
   display:'flex',
   justifyContent:'space-between',
    },
}));
const Student = (props) => {
    const {removeStudent,findItems} = useAuth()
    const classes = useStyles();
    // console.log(task.title)
    return (
        <li className={classes.studentList}>
            <span>{props.title}</span>
            <div style={{ display: 'flex' }}>
                <span className={classes.button} onClick={()=>findItems(props.id)}><EditIcon /></span>
                <span className={classes.button} onClick={()=>removeStudent(props.id)}><DeleteIcon color="secondary" /></span>
            </div>
        </li>
    )
}

export default Student
