import React from 'react'

const NewBudget = () => {
  return (
    <div className='contenedor-presupuesto sombra contenedor'>
        <div>
            <form className='formulario'>
                <div className='campo'>
                    <label htmlFor="">Definir presupuesto</label>
                    <input 
                    type="text" 
                    className="nuevo-presupuesto" 
                    id=""
                    placeholder='Añade tu presupuesto' 
                    />
                </div>
                <input type="submit" value="Añadir" />
            </form>
        </div>
    </div>
  )
}

export default NewBudget