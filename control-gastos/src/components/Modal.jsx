import CerrarBtn from '../img/cerrar.svg'

const Modal = ({
    setModal,
    animarModal,
    setAnimarModal
}) => {
    const handleClose=()=>{
        setAnimarModal(false)
        
        setTimeout(()=>{setModal(false)}
   ,500)
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
        <form className={`formulario ${animarModal? 'animar':'cerrar'}`}>
            <legend>Agregar Gasto</legend>
            <div className='campo'>
                <label htmlFor="Nombre">Nombre Gasto</label>
                <input 
                type="text"
                placeholder='Nombre Gasto'
                />
            </div>
            <div className='campo'>
                <label htmlFor="Cantidad">Cantidad</label>
                <input 
                type="number"
                placeholder='Cantidad'
                />
            </div>
            <div className='campo'>
                <label htmlFor="Categoria">Categoria</label>
                <select id="Categoria">
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
            <input type="submit" value="Añadir Gasto" />
        </form>
    </div>
  )
}

export default Modal