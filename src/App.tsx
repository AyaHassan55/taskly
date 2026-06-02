

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Projects from './pages/projects'
import Signup from './pages/Signup'

function App() {


  return (
   
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/project" element={<Projects />} />
          </Routes>
        </div>
      </div>

     

      
     
    
  )
}

export default App
