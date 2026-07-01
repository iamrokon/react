// last working page : 66
import { useState } from 'react'
import React from 'react'
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
import Calculator from './components/Calculator'
import Text from './components/Text'
import Emoji from './components/Emoji'
import Bracket from './components/Bracket'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import Section from './components/Section'
import Counter from './components/Counter'
import ThemeContext from './context/themeContext'

// function App() {
//   const [count, setCount] = useState(0)
//   const quantities = [1, 2, 3];

//   return (
//     <>
//       {/* <Increment />
//       <Increment />
//       <Increment /> */}
//       {/* <Fruits /> */}
//       {/* <Clock locale='bn-BD'/> */}
//       {/* <ClockClass locale='bn-BD'/> */}
//       {/* <ClockList locale='bn-BD' quantities={quantities}/> */}
//       {/* <Form /> */}
//       {/* <Calculator /> */}
//       {/* <Text /> */}
//       {/* <Emoji>
//         {({ addEmoji }) => (
//           <Bracket>
//             {({ addBracket }) => (
//               <Text addEmoji={addEmoji} addBracket={addBracket} />
//             )}
//           </Bracket>
//         )}
//       </Emoji> */}

//       {/* <ClickCounter />
//       <HoverCounter /> */}
//       <div className='app'>
//         {/* <Counter
//           render={(count, incrementCount) => (
//             <ClickCounter count={count} incrementCount={incrementCount} />
//           )}
//         />
//         <Counter
//           render={(count, incrementCount) => (
//             <HoverCounter count={count} incrementCount={incrementCount} />
//           )}
//         /> */}
//         {/* <Counter>
//           {(count, incrementCount) => (
//               <ClickCounter count={count} incrementCount={incrementCount} />
//           )}
//         </Counter>
//         <Counter>
//           {(count, incrementCount) => (
//               <HoverCounter count={count} incrementCount={incrementCount} />
//           )}
//         </Counter> */}
//         <Section theme="dark"/>
//       </div>
//     </>
//   )
// }

class App extends React.Component {
  state = {
    theme: 'dark',
  }

  render() {
    const { theme } = this.state;
    return (
      <div className='app'>
        <ThemeContext.Provider value={theme}>
          <Section />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
