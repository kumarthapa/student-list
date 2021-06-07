import React from 'react'
import { useAuth } from "./context/StudentContext"
import Task from "./Student"
const StudentList = () => {
    const { student } = useAuth()
    // console.log(tasks)
    //const newtasks = [tasks]
    return (
        <div style={{display:'flex',flexDirection:'column', justifyContent:'flex-start',marginLeft: '-30px'}}>
            <ul>
                {

                    student.length?student.map((student) => {
                        return <Task title={student.title} id={student.id} key={student.id} />
                    }):<div><h3>No student</h3></div>
                }
            </ul>
        </div>
    )
}

export default StudentList
