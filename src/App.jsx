import { useState, useEffect } from "react"
import Header from "./components/Header.jsx"
import Button from "./components/Button.jsx"
import {formatearDinero, calcularTotalPagar} from "./helpers/index.js" // como es .js con poner solo la carpeta es suficiente

function App() {
  const [cantidad, setCantidad] = useState(10000); // hacemos destructuring de useState porque devuleve un arreglo 
  const [meses, setMeses] = useState(6); //le agrega selected react
  const [total, setTotal] = useState(calcularTotalPagar(cantidad, meses))

  useEffect( () => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar)
  }, [cantidad, meses]) // siempre va un callback (funcion flecha) y un arreglo de dependencias
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100

  function handleChange(e){
    setCantidad(parseInt(e.target.value))
  }

  function handlerClickDecremento(){
    const valor = cantidad - STEP
    if(valor >= MIN){
      setCantidad(valor)
    }
  }

  function handlerClickIncremento(){
    const valor = cantidad + STEP
    if(valor <= MAX){
      setCantidad(valor)
    }
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      < Header />

      <div className="flex justify-between my-6">
        <Button 
          operador="-"
          fn={handlerClickDecremento}
        />
        <Button 
          operador="+"
          fn={handlerClickIncremento}
        />
      </div>

      <input 
        type="range"
        className="w-full h-16 accent-lime-500 hover:accent-lime-600"
        onChange={ handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      
      <p className="text-center font-extrabold my-10 text-indigo-600 text-6xl">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elegi un <span className="text-indigo-600">Plazo</span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded text-center text-xl font-bold text-gray-500"
        value={meses}
        onChange={ e => setMeses(parseInt(e.target.value))}
      > 
        <option value="6">6 Meses</option> //le agrega propiedad selected
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de Pagos</span>
        </h2>

        <p className="text-center font-bold text-xl text-gray-500">{meses} Meses</p>
        <p className="text-center font-bold text-xl text-gray-500">{formatearDinero(total)} Total a Pagar</p>
        <p className="text-center font-bold text-xl text-gray-500">Pagos Mensuales</p>
      </div>

    </div>
  )
}

export default App
