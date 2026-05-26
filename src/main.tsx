import React, { StrictMode } from 'react'
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

createRoot(document.getElementById('root')!).render(
  // 'Hello World!'
  // myElement
  <App />
)
