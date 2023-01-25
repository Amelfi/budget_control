import { useEffect, useState } from "react"
import React from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlBudget = ({gastos, setGastos, setPresupuesto, presupuesto, setIsValid}) => {
 
    
   const [disponible, setDisponible]=useState(0)
   const [porcentaje, setPorcentaje]=useState(0)
   const [gastado, setGastado]=useState(0)
   useEffect(()=>{
       const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)
       setGastado(totalGastado)
       const totalDisponible= presupuesto - totalGastado
       setDisponible(totalDisponible);
       const nuevoPorcentaje=(((presupuesto - totalDisponible)/presupuesto)*100).toFixed(2)
       setTimeout(()=>{
           setPorcentaje(nuevoPorcentaje)
       },1500)
   },[gastos])
 
   const formatearCantidad =(cantidad)=>{
        return cantidad.toLocaleString('en-US',{
            style:'currency',
            currency:'USD'
        })
    }

    const handleResetApp= ()=>{
        const resultado = confirm('Desear Resetear la App?');
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValid(false)
        }
    }
  return (
  
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626': '#3B82F6',
                    trailColer: '#F5F5F5',
                    textColor: porcentaje > 100? '#DC2626' : '#3B82F6'
                })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />
        </div>
        <div className='contenido-presupuesto'>
            <button
                className="reset-app"
                type="button"
                onClick={handleResetApp}
            >
                Resestear App
            </button>
            <p>
                <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo': ''}`}>
                <span>Disponible:</span> {formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado:</span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
   
  )
}

export default ControlBudget