import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({
  gastos,
  setGastos,
  presupuesto, 
  setPresupuesto,
  isValid,
  setIsValid
}) => {
  return (
    <header>
      <h1> Planificador de Gastos </h1>
        { isValid ? (<ControlBudget gastos={gastos} presupuesto={presupuesto} setGastos={setGastos} setPresupuesto={setPresupuesto} setIsValid={setIsValid}/> )
        :(        
            <NewBudget 
            
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValid={setIsValid}
            />
            )}
    </header>
  )
}

export default Header