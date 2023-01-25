import { useState, useEffect } from "react";
import Header from "./components/Header";
import Filtros from "./components/Filtros";
import Modal from "./components/Modal";
import IconNuevoGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./components/helpers";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto'))?? 0
  );
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [filtro, setFiltro] = useState('');
  const [gastoFiltrado, setGastoFiltrado] = useState([]);
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos')? JSON.parse(localStorage.getItem('gastos')) : []
  );
  const [gastoEditar, setGastoEditar]= useState({})

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true);
      
  
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar])
  

  const handleModal = () => {
    setModal(true);
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };
  const guardarGastos = (gasto) => {
    if(gasto.id){
      const gastoActualizado= gastos.map(gastoState => gastoState.id === gasto.id? gasto: gastoState)
      setGastos(gastoActualizado);
    }else{
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    }
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminarGastos = id=>{
    const gastoEliminado= gastos.filter(eliminar=> eliminar.id !== id)
    setGastos(gastoEliminado)
  }
  useEffect(()=>{
    localStorage.setItem('presupuesto', presupuesto)
  },[presupuesto])

  useEffect(()=>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  },[gastos])

  useEffect(()=>{
    const presupuestoLS= Number(localStorage.getItem('presupuesto')) ?? 0
    if(presupuestoLS > 0){
      setIsValid(true)
    }
  },[])
  
  useEffect(()=>{
    if(filtro){
      const gastosFiltrados= gastos.filter(e => e.categoria === filtro)
      setGastoFiltrado(gastosFiltrados)
    }
  },[filtro])

  return (
    <div className={modal ? 'fijar': ''}>
      <Header
         gastos={gastos}
         setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      {isValid && (
        <> 
            <main>
              <Filtros
               filtro={filtro}
               setFiltro={setFiltro}
              />
               <ListadoGastos
                  gastos={gastos}
                  setGastoEditar={setGastoEditar}
                  eliminarGastos={eliminarGastos}
                  filtro={filtro}
                  gastoFiltrado={gastoFiltrado}
               />
            </main>
          <div className="nuevo-gasto">
            <img src={IconNuevoGasto} alt="nuevogasto" onClick={handleModal} />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGastos={guardarGastos}
          gastoEditar={gastoEditar}
        />
      )}
    </div>
  );
}

export default App;
