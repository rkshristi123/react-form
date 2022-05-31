import React from 'react'
import {useEffect} from 'react'

import axios from "axios"
import Table from './Table'

const Form = () => {
    const [data,setData]=React.useState({
     department:"finance"
    })
    const [formarr,setFormarr]=React.useState([])

const arr=["username","age","address","salary","department","marital_status","image"]

    const handlechange=(e)=>{
        console.log(e.target)
        let{name,value,type,checked,files}=e.target
        if(type==="checkbox"){
            setData({
                ...data,[name]:checked,
            })
        }else if(type==="file"){
            setData({
                ...data,[name]:files,
            })
        }else{
       
        setData({
            ...data,[name]:value,
        })
    }
    }

    useEffect(()=>{
        axios
       .get(`http://localhost:3004/data`)
      
       .then((d)=>{
        setFormarr(d.data);
           console.log(d)
          
       });
       },[]);

//  useEffect(()=>{
//      console.log(data)
//  })
// const handlesubmit=(e)=>{
//     e.preventDefault();
//     console.log(data)
//    setFormarr([...formarr,data])
//    console.log(formarr)
// }



const handlesubmit=(e)=>{
    e.preventDefault();
    fetch("http://localhost:3004/data",{
        method:"POST",
        headers: {
            "content-type": "application/json",
        },
        body:JSON.stringify({
            username:data.username,
            age:data.age,
            address:data.address,
            salary:data.salary,
            department:data.department,
            marital_status:data.marritalstatus,
           image:data.resume
        }),
    
    })
    .then((r)=>r.json())
    .then((d)=>{
        setFormarr([...formarr,d])
        setData("")
    });
}

  return (
    <div><h1>Form</h1>

    <form onSubmit={handlesubmit}>
        <div>
            <label>Name: </label>
            <input name="username" type="text" placeholder='write name' value={data.username} onChange={handlechange}/>
        </div>
        <div>
            <label>Age: </label>
            <input name="age" type="number" placeholder='write age' value={data.age} onChange={handlechange}/>
        </div>
        <div>
            <label>Address: </label>
            <input name="address" type="text" placeholder='write address' value={data.address} onChange={handlechange}/>
        </div>
        <div>
            <label>salary: </label>
            <input name="salary" type="number" placeholder='write salary' value={data.salary} onChange={handlechange}/>
        </div>
        <div>
            <label>Department: </label>
            <select onChange={handlechange} name="department">
            
                <option value="finance">finance</option>
                <option value="marketing">marketing</option>
            </select>
        </div>
        <div>
            <label>Marital Status :  </label>
            <label>yes</label>
            <input name="marritalstatus" type="radio" value="yes" onChange={handlechange}/>
            <label>No</label>
            <input name="marritalstatus" type="radio" value="no" onChange={handlechange}/>
            
        </div>
        <div>
            <label>Upload File : </label>
            <input type="file" name="resume" files={data.resume} onChange={handlechange}/>
        </div>
        <br/>
        <button type="Submit">submit</button>
        </form>

        <br/>
        <br/>
      

<Table arr={arr} formarr={formarr}/>

    </div>

  )
}

export default Form