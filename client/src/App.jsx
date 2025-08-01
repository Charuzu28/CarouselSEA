import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CoffeeDate from './components/CoffeeDate'
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [count, setCount] = useState(0)

  return <CoffeeDate />
}

export default App
