import React from 'react'
import style from "./table.module.css"
import Tableitem from './Tableitem'

const Table = ({arr,formarr}) => {
  return (
    <div>
<table className={style.table}>
  <tr className={style.tr}>
      {
arr.map((e)=>(
    <th className={style.th}>{e}</th>
))
}  
  </tr>
  
 

<Tableitem formarr={formarr}/>
 
 
</table>
    </div>
  )
}

export default Table