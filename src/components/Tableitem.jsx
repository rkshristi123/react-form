import React from 'react'
import style from "./table.module.css"

const Tableitem = ({formarr}) => {
  return (
    <>
         {
            formarr.map((el)=>(
            <>
                <tr className={style.tr}>
               <td>{el.username}</td>
               <td>{el.age}</td> 
               <td>{el.address}</td>
               <td>{el.salary}</td>
               <td>{el.department}</td>
               <td>{el.marital_status}</td>
               </tr>
               
             </>
            ))
        }
    </>
  )
}

export default Tableitem