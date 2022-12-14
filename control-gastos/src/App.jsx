import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconNuevoGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./components/helpers";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleModal = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };
  const guardarGastos = (gasto) => {
    gasto.id = generarId;
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <div className={modal ? 'fijar': ''}>
      <Header
         gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      {isValid && (
        <> 
            <main>
               <ListadoGastos
                  gastos={gastos}
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
        />
      )}
    </div>
  );
}

export default App;
