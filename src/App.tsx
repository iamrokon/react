import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Increment from './components/Increment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Increment />
      <Increment />
      <Increment />
    </>
  )
}

export default App
