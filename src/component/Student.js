import React, {useState} from 'react'
import uuid from "react-uuid"
const Student = () => {
const [student, setStudent] = useState({
    id:uuid(),
    name:'',
    class:'',
    city:''
});
const [newstudent, setNewstudent] = useState([])
const [update, setUpdate] = useState({
    name:'',
    class:'',
    city:''
})
const [isTrue, setIstrue] = useState(false)
const onChangeData = name => event =>{
    setStudent({
        ...student,
        id:uuid(),
        [name]: event.target.value
    })
}

const onClickdata = () =>{
    if(student.name ===''||student.class ===''||student.city ===''){
      alert('Please fill all the fields!')
    }else{
        localStorage.setItem("student",JSON.stringify(student))
    const stuData = JSON.parse(localStorage.getItem("student"))
    setNewstudent([...newstudent, stuData])
    setStudent({
    name:'',
    class:'',
    city:''
    })  
    }
    
}
const deleteHandler = (id) =>{
     setNewstudent(newstudent.filter((item)=>item.id!==id))  
}
       
const EditHandler = (studata) =>{
    setIstrue(true)
    setUpdate(studata)
}
const onChangehandle = name=>e =>{
    setUpdate({
        ...update,
            [name]:e.target.value
       })
   }

const Updatehandler = () =>{
    localStorage.setItem("update",JSON.stringify(update))
    const stuData = JSON.parse(localStorage.getItem("update"))
    setNewstudent([stuData])
    setIstrue(false)
}
           
    return (
        <>
        <div className="container">
        <h1 className="app_title">Curd application in React</h1>
        <div className="student_input_field">
           <input type="text" name="name" value={student.name} onChange={onChangeData('name')} placeholder="Write your name..." className="inner_input"/>
           <input type="text" name="class" value={student.class} onChange={onChangeData('class')} placeholder="Write your class..." className="inner_input"/>
           <input type="text" name="city" value={student.city} onChange={onChangeData('city')} placeholder="Write your city..." className="inner_input"/>
           <button className="Addbutton" onClick={onClickdata}>+ADD</button>
        </div>  
        <div className="student_list">
           <table>
               <thead>
                   <tr>
                       <th>Sl.no</th>
                       <th>Name</th>
                       <th>Class</th>
                       <th>City</th>
                       <th></th>
                       <th></th>
                   </tr>
                   <br/>
               </thead>
               <tbody>

                   { isTrue===false? 
                       newstudent.map((studata,index)=>{
                        return <tr key={index}>
                       <td>{index+1}</td>
                       <td>{studata?.name}</td>
                       <td>{studata?.class}</td>
                       <td>{studata?.city}</td>
                       <td style={{textAlign:'center'}}><button className="Editbutton" onClick={()=>EditHandler(studata)}>Edit</button></td>
                       <td style={{textAlign:'center'}}><button className="Deletebutton" onClick={()=>deleteHandler(studata?.id)}>Delete</button></td>
                   </tr>
                       }):
                   
                       <tr>
                           <td colSpan="5">
                               <div style={{textAlign:'right'}}>
                                <span style={{margin:'10px'}}>{update.length}</span>
                                <input type="text" name="name" value={update.name} onChange={onChangehandle('name')} placeholder="Write your name..." className="inner_input"/>
                                <input type="text" name="class" value={update.class} onChange={onChangehandle('class')} className="inner_input"/>
                                <input type="text" name="city" value={update.city} onChange={onChangehandle('city')} className="inner_input"/>
                                <button className="Updatebutton" onClick={Updatehandler}>Update</button>
                               </div>
                           </td>
                       </tr>
}
               </tbody>
           </table>
       </div>   
       </div>
        </>
    )
}

export default Student
