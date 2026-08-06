// import React, { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// const myElement = React.createElement(
//   "div",
//   null,
//   React.createElement("p", null, "Hello Abid")
// );
// const myElement = (
//   <div>
//     <h1 id="display">0</h1>
//     <div>
//       <button id="button">Increment +</button>
//     </div>
//   </div>
// )

// let index = 0;
// setInterval(() => {
//   const element = (
//     <h1 className='heading' tabIndex={index}>
//       <span className='text'>Hello {new Date().toLocaleTimeString()}</span>
//     </h1>
//   );
//   createRoot(document.getElementById('root')!).render(element)
//   index++;
// }, 1000)

const root = createRoot(document.getElementById('root')!);

// Custom Hooks Start
// let states = []; // [0:[value, setter], 1:[value, setter]]
// let stateIndex = -1;
// function useState(defaultValue) {
//   const index = ++stateIndex;
//   if(states[index]) {
//     return states[index];
//   }
//   const setValue = (newValue) => {
//     states[index][0] = newValue;
//     renderWithSumit();
//   }
//   const returnArray = [defaultValue, setValue];
//   states[index] = returnArray;
//   return returnArray;
// }

// function App() {
//   const [todo, setTodo] = useState('');
//   const [warning, setWarning] = useState(null);
//   const handleInput = (e) => {
//     const inputValue = e.target.value;
//     const updatedWarning = inputValue.includes('.js')
//       ? 'You need Javascript skills to complete the task. Do you have it?'
//       : null;
//     setTodo(inputValue);
//     setWarning(updatedWarning);
//   };
//   return (
//     <div>
//       <p>{todo}</p>
//       <p>
//         <textarea name="todo" value={todo} onChange={handleInput} />
//       </p>
//       <hr />
//       <h2>{warning || 'Good choice!'}</h2>
//     </div>
//   )
// }

// function renderWithSumit() {
//   stateIndex = -1;
//   root.render(<App />);
// }
// Custom Hooks End

root.render(
  // 'Hello World!'
  // myElement
  <App />
)
