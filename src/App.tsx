

import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Projects from './pages/projects'
import Signup from './pages/AuthPages/Signup'
import Login from './pages/AuthPages/Login'
import Forgot_Password from './pages/AuthPages/Forgot_Password'
import Reset_Password from './pages/AuthPages/Reset_Password'
import AuthRedirect from './components/AuthRedirect'
import Dashboard from './pages/Dashboard/Dashboard'
import ProtectedRoute from './components/ProtectedRoutes'

function App() {
  const location = useLocation();
  const authPages = [
      "/login",
    "/sign-up",
    "/forgot-password",
    "/reset-password",
  ];

const showHeader = authPages.includes(location.pathname) || '/';
  return (


    <div className="min-h-screen flex flex-col">
      <AuthRedirect />
      {showHeader && <Header />}
      <div className="flex-1">
        <Routes>
          
          <Route path="/" element={ <Login />}/>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<Forgot_Password />} />
          <Route path="/reset-password" element={<Reset_Password />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </div>
    </div>






  )
}

export default App
