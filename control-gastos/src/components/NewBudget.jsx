import { useState } from "react"
import React from 'react'
import Message from "./Message"

const NewBudget = ({
  presupuesto, 
  setPresupuesto,
  setIsValid
}) => {
  const [message, setMessage]= useState('')

  const handleMessage = (e)=>{
    e.preventDefault();
      if (!presupuesto || presupuesto < 0){
          setMessage('No es un presupuesto valido')
          return
      }
      setMessage('')
      setIsValid(true)
      
  }
  return (
    <div className='contenedor-presupuesto sombra contenedor'>
            <form className='formulario' onSubmit={handleMessage}>
                <div className='campo'>
                    <label htmlFor="">Definir presupuesto</label>
                    <input 
                    type="number" 
                    className="nuevo-presupuesto" 
                    id=""
                    placeholder='Añade tu presupuesto' 
                    value={presupuesto}
                    onChange={e=>setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Añadir" />
                {message && <Message children={message} tipo={'error'}/>}
            </form>
    </div>
  )
}

export default NewBudget