import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftComp from './components/leftComp/LeftComp'
import RightComp from './components/rightComp/RightComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <div className='lc'>
          <LeftComp />
        </div>
        <div className='rc'>
          <RightComp />
        </div>
      </div>
    </>
  )
}

export default App
