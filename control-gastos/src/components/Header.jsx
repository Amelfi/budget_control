import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({
  presupuesto, 
  setPresupuesto,
  isValid,
  setIsValid
}) => {
  return (
    <header>
      <h1> Planificador de Gastos </h1>
        { isValid ? (<ControlBudget presupuesto={presupuesto} /> )
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