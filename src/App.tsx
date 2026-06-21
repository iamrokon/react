import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Increment from './components/Increment'
import Fruits from './components/Fruits'
import Clock from './components/Clock'
import ClockClass from './components/ClockClass'
import ClockList from './components/ClockList'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)
  const quantities = [1, 2, 3];

  return (
    <>
      {/* <Increment />
      <Increment />
      <Increment /> */}
      {/* <Fruits /> */}
      {/* <Clock locale='bn-BD'/> */}
      {/* <ClockClass locale='bn-BD'/> */}
      {/* <ClockList locale='bn-BD' quantities={quantities}/> */}
      <Form />
    </>
  )
}

export default App
