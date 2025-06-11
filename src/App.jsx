import { useState } from "react"
import Header from "./components/Header.jsx"

function App() {
  const [cantidad, setCantidad] = useState(10000); // hacemos destructuring de useState porque devuleve un arreglo 

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100

  function handleChange(e){
    setCantidad(parseInt(e.target.value))
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      < Header />

      <input 
        type="range"
        className="w-full h-16 accent-lime-500 hover:accent-lime-600"
        onChange={ handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      
      <p className="text-center font-extrabold my-10 text-indigo-600 text-6xl">{cantidad}</p>

    </div>
  )
}

export default App
