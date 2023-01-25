import React from 'react'
import Gastos from './Gastos'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGastos, filtro, gastoFiltrado}) => {
  return (
   
    <div className='listado-gastos contenedor'>
         {filtro ?(
           <>
           <h2>{gastoFiltrado.length ? 'Gastos': 'No hay gastos en esta categoria'} </h2>
         { gastoFiltrado.map(e=>(
            <Gastos
             key={e.id}
             gasto={e}
             setGastoEditar={setGastoEditar}
             eliminarGastos={eliminarGastos}
            />
        ))}
        </>
         ):(
          <>
          <h2>{gastos.length ? 'Gastos': 'No hay gastos'} </h2>
          {gastos.map(e=>(
            <Gastos
             key={e.id}
             gasto={e}
             setGastoEditar={setGastoEditar}
             eliminarGastos={eliminarGastos}
            />
        )
         )}
         
         </>
       

         )}
    </div>
  )
}

export default ListadoGastos