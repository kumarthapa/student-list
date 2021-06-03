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
const onChangeData = name => event =>{
    setStudent({
        ...student,
        id:uuid(),
        [name]: event.target.value
    })
}

const onClickdata = () =>{
    if(student.name===''||student.class===''||student.city===''){
      alert('no no')
    }else{
        localStorage.setItem("student",JSON.stringify(student))
    const stuData =JSON.parse(localStorage.getItem("student"))
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

                   {
                       newstudent.map((studata,index)=>{
                        return <tr key={index}>
                       <td>{index+1}</td>
                       <td>{studata?.name}</td>
                       <td>{studata?.class}</td>
                       <td>{studata?.city}</td>
                       <td style={{textAlign:'center'}}><button className="Editbutton" >Edit</button></td>
                       <td style={{textAlign:'center'}}><button className="Deletebutton" onClick={()=>deleteHandler(studata?.id)}>Delete</button></td>
                   </tr>
                       })
                   }
                   
               </tbody>
           </table>
       </div>   
       </div>
        </>
    )
}

export default Student
