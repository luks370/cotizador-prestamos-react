import { useState } from "react"
import Header from "./components/Header.jsx"

function App() {
  const [cantidad, setCantidad] = useState(1000); // hacemos destructuring de useState porque devuleve un arreglo 
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
      />

      {cantidad}

    </div>
  )
}

export default App
