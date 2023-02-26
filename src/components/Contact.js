import React from 'react'
import { useState } from 'react';
const Contact = () => {
    
    const [name, setName] = useState("")

    return (
    <div>
        <form>
            <input type="text" placeholder='Name' onChange={(e)=>setName( e.target.value)} value={name}/>
            <input type={'email'} placeholder="Email"/>
        </form>
        <button type="button" className="btn btn-primary" onClick={()=> console.log(name)}>Press</button>
        <p>{name}</p>
    </div>
  )
}

export default Contact