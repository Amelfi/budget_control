import React from 'react'
import { formatearFecha } from './helpers'
import IconoAhorro from '../img/icono_ahorro.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
const Gastos = ({gasto}) => {
    const diccionario={
                    ahorro: IconoAhorro,
                    comida: IconoComida,
                    casa: IconoCasa,
                    gastos: IconoGastos,
                    ocio: IconoOcio,
                    suscripciones: IconoSuscripciones,
                    salud: IconoSalud
    }

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => console.info('swipe action triggered')}>
            Action name
          </SwipeAction>
        </LeadingActions>
      );
      
      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
          >
            Delete
          </SwipeAction>
        </TrailingActions>
      );
  return (
 <SwipeableList> 
    
<SwipeableListItem
     leadingActions={leadingActions()}
     trailingActions={trailingActions()}
   >
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <img src={diccionario[gasto.categoria]} alt="" />
            <div className='descripcion-gasto'>
                <p className='categoria'>
                    {gasto.categoria}
                </p>
                <p className='nombre-gasto'>
                    {gasto.nombre}
                </p>
                <p className='fecha-gasto'>
                    Agregado el:{''}
                    <span>{formatearFecha(gasto.fecha)}</span>{}
                </p>
                
            </div>
        </div>
                <p className='cantidad-gasto'>
                    ${gasto.cantidad}
                </p>
    </div>
    </SwipeableListItem>
</SwipeableList> 
  )
}

export default Gastos