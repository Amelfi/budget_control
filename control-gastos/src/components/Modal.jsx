import CerrarBtn from '../img/cerrar.svg'
import {useState, useEffect} from 'react'
import Message from './Message'

const Modal = ({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGastos,
    gastoEditar
}) => {

    
    const handleClose=()=>{
        setAnimarModal(false)
        
        setTimeout(()=>{setModal(false)}
   ,500)
    }
    const [message, setMessage]=useState('')
    const [form, setForm] = useState({
        nombre: "",
        cantidad: "",
        categoria: "",
        id: "",
        fecha: ""
    })
    
        useEffect(() => {
            if(Object.keys(gastoEditar).length > 0){
                console.log(gastoEditar.nombre)
                setForm({...form, nombre: gastoEditar.nombre 
                    , cantidad: gastoEditar.cantidad
                    , categoria: gastoEditar.categoria
                    , id: gastoEditar.id
                    , fecha: gastoEditar.fecha})
               
              }
  
        }, [])
     console.log(form)
    const handleChange=(e)=>{
         setForm({...form, [e.target.name]: e.target.value})   
    }

    const handleSubmit = e =>{
        e.preventDefault()
      if([form.nombre, form.cantidad, form.categoria].includes('')){
            setMessage('Todos los campos son obligatorios')
            setTimeout(()=>{
                setMessage('')
            }, 3000)
            return;
      }
      guardarGastos(form)
    }
  return (
    <div className="modal">
        <div className='cerrar-modal'>
            <img 
            src={CerrarBtn} 
            alt="cerrarbtn" 
            onClick={handleClose} 
            />
        </div>
        <form className={`formulario ${animarModal? 'animar':'cerrar'}`} onSubmit={handleSubmit}>
            <legend>{gastoEditar.nombre? "Editar Gasto": "Agregar Gasto"}</legend>
            {message && <Message tipo='error'>{message}</Message>}

            <div className='campo'>
                <label htmlFor="Nombre">Nombre Gasto</label>
                <input 
                value={form.nombre || ""}
                name='nombre'
                type="text"
                placeholder='Nombre Gasto'
                onChange={handleChange}
                />
            </div>
            <div className='campo'>
                <label htmlFor="Cantidad">Cantidad</label>
                <input 
                 value={form.cantidad || ""}
                name='cantidad'
                type="number"
                placeholder='Cantidad'
                onChange={(e)=>handleChange(e)}
                />
            </div>
            <div className='campo'>
                <label htmlFor="Categoria">Categoria</label>
                <select id="Categoria" name='categoria' onChange={handleChange}   value={form.categoria || ""}>
                    <option value="">--Seleccione--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="salud">Salud</option>
                </select>
            </div>
            <input type="submit" value={gastoEditar.nombre?"Guardar Cambios": "Añadir Gasto"} />
        </form>
    </div>
  )
}

export default Modal