

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Projects from './pages/projects'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Forgot_Password from './pages/Forgot_Password'
import Reset_Password from './pages/Reset_Password'
import AuthRedirect from './components/AuthRedirect'

function App() {


  return (
   
      
      <div className="min-h-screen flex flex-col">
         <AuthRedirect />
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<Forgot_Password />} />
            <Route path="/reset-password" element={<Reset_Password />} />
          </Routes>
        </div>
      </div>

     

      
     
    
  )
}

export default App
