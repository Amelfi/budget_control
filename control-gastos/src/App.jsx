import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './components/helpers'

function App() {
 const [presupuesto, setPresupuesto] = useState(0)
 const [isValid, setIsValid]= useState(false)
 const [modal, setModal] = useState(false)
 const [animarModal, setAnimarModal] =useState(false)
 const [gastos, setGastos] =useState([])

 const handleModal=()=>{
   setModal(true)

   setTimeout(()=>{setAnimarModal(true)}
   ,500)
 }
 const guardarGastos = gasto =>{
   gasto.id = generarId;
   setGastos([...gastos, gasto])

   setAnimarModal(false)      
   setTimeout(()=>{setModal(false)}
,500)

 }
  return (
   <>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValid={isValid}
      setIsValid={setIsValid}
      /> 
      {isValid &&(
      <div className='nuevo-gasto'>
         <img src={IconNuevoGasto} alt="nuevogasto" onClick={handleModal}/>
         
      </div>
      )
   }
   {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} guardarGastos={guardarGastos}/>}
   </>
  )
}

export default App
