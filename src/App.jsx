import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/commonComponents/NavigationBar/NavigationBar'
import Footer from './components/commonComponents/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <NavigationBar/>
        <Footer/>
      </div>
     
    </>
  )
}

export default App
