import React from 'react'
import Gastos from './Gastos'

const ListadoGastos = ({gastos}) => {
  return (
   
    <div className='listado-gastos contenedor'>
         <h2>{gastos.length ? 'Gastos': 'No hay gastos'} </h2>
         {gastos.map(e=>(
             <Gastos
              key={e.id}
              gasto={e}
             />
         )

         )}
    </div>
  )
}

export default ListadoGastos