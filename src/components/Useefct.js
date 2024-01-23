import React, { useEffect, useState } from 'react';

function Useefct() {
    const [btn, setbtn] = useState()

    console.log("inside Useefct")

    useEffect(
        ()=>{

            console.log('hello world')
        },[btn]
    )
  return (
    <div>
        <button onClick={()=>setbtn("A button")}>A</button>
        <button onClick={()=>setbtn("B button")}>B</button>
        <button onClick={()=>setbtn("C button")}>C</button>
        <p>{btn}</p>
      
    </div>
  )
}

export default Useefct
