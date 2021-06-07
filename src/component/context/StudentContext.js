import React, { useContext, useState, useEffect } from "react"
import uuid from "react-uuid";
const AuthContext = React.createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [student, setStudent] = useState([
        { title: 'I am playing fooball', id: '1' },
        { title: 'You are writing a letter', id: '2' },
        { title: 'I am able to come now', id: '3' },
    ])
    const [editItem, setEdititem] = useState(null)
    const Addstudent = (title) => {
        setStudent([...student, { title, id: uuid() }])
    }
    const removeStudent= (id)=>{
        setStudent(student.filter((stu)=>stu.id!==id))
    }
    const clearStudent= ()=>{
        setStudent([])
    }
    const findItems= (id)=>{
        const item = student.find((stu)=>stu.id===id)
        setEdititem(item)
    }
    const EditStudent= (title,id)=>{
        const newstudent = student.map((newstu)=>(newstu.id===id?{title,id}:newstu))
        setStudent(newstudent)
        setEdititem(null)
    }
    const value = {
        student,
        Addstudent,
        removeStudent,
        clearStudent,
        findItems,
        EditStudent,
        editItem,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}