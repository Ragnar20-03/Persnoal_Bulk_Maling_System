import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputFile from './components/InputFile'
import InputForm from './main_components/InputForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <InputFile />
        <InputForm />
    </>
  )
}

export default App
