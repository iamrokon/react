// last working page : 143
import { useCallback, useMemo, useState } from 'react'
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
// import Todos from './components/TodoClass'
import Todo from './components/Todo'
import MyComponentClass from './components/MyComponentClass'
import MyComponent from './components/MyComponent'
import Title from './components/Title'
import ShowCount from './components/ShowCount'
import ButtonFunction from './components/ButtonFunction'

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

// class App extends React.Component {
//   state = {
//     theme: 'light',
//   }

//   switchTheme = () => {
//     this.setState((prevState) => ({
//       theme: prevState.theme === 'light' ? 'dark' : 'light',
//     }))
//   }

//   render() {
//     const { theme } = this.state;
//     return (
//       <div className='app'>
//         <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
//           <Section />
//         </ThemeContext.Provider>
//       </div>
//     )
//   }
// }

// Component rerender off korte object er bodole state pathabo

// class App extends React.Component {
//   state = {
//     theme: 'light',
//     switchTheme: () => {
//       this.setState((prevState) => ({
//         theme: prevState.theme === 'light' ? 'dark' : 'light',
//       }))
//     }
//   }

//   render() {
//     return (
//       <div className='app'>
//         <ThemeContext.Provider value={this.state}>
//           <Section />
//         </ThemeContext.Provider>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div className="app">
//         {/* <Todos /> */}
//         {/* <Todo /> */}
//         {/* <Counter /> */}
//         {/* <MyComponentClass /> */}
//         <MyComponent />
//       </div>
//     );
//   }
// }

function App() {
    // const [show, setShow] = useState(true)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [show, setShow] = useState(true)

    const incrementByOne = useCallback(() => {
      setCount1((prevCount) => prevCount + 1)
    }, [])

    const incrementByFive = useCallback(() => {
      setCount2((prevCount) => prevCount + 5)
    }, [])

    const isEvenOrOdd = useMemo(() => {
      let i = 0;
      while (i < 1000000000) i++;
      return count1 % 2 === 0
    }, [count1]);

    return (
      <div className="app">
        <Title />
        <ShowCount count={count1} title="Counter 1" />
        <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
        <ButtonFunction handleClick={incrementByOne}>Increment Counter 1</ButtonFunction>
        <hr />
        <ShowCount count={count2} title="Counter 2" />
        <ButtonFunction handleClick={incrementByFive}>Increment Counter 5</ButtonFunction>
        {/* <Todos /> */}
        {/* <Todo /> */}
        {/* <Counter /> */}
        {/* <MyComponentClass /> */}
        {/* <div>{show && <MyComponent/>}</div>
        <p>
          <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>{show ? 'Hide Post' : 'Show Post'}</button>
        </p> */}
      </div>
    );
}


export default App