import { useState } from "react"
import Header from "./components/Header.jsx"
import Button from "./components/Button.jsx"
import {formatearDinero} from "./helpers/index.js" // como es .js con poner solo la carpeta es suficiente

function App() {
  const [cantidad, setCantidad] = useState(10000); // hacemos destructuring de useState porque devuleve un arreglo 

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100

  function handleChange(e){
    setCantidad(parseInt(e.target.value))
  }

  function handlerClickDecremento(e){
    const valor = cantidad - STEP
    if(valor >= MIN){
      setCantidad(valor)
    }
  }

  function handlerClickIncremento(e){
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

    </div>
  )
}

export default App
