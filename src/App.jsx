import { useState } from 'react'
import Login from './components/Login'
import MainWindow from './components/MainWIndow'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Login/>
      <MainWindow/>
    
      
    </>
  )
}

export default App
