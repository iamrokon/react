import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Increment from './components/Increment'
import Fruits from './components/Fruits'
import Clock from './components/Clock'
import ClockClass from './components/ClockClass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Increment />
      <Increment />
      <Increment /> */}
      {/* <Fruits /> */}
      {/* <Clock locale='bn-BD'/> */}
      <ClockClass locale='bn-BD'/>
    </>
  )
}

export default App
