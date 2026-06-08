import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Signup from './pages/AuthPages/Signup'
import Login from './pages/AuthPages/Login'
import Forgot_Password from './pages/AuthPages/Forgot_Password'
import Reset_Password from './pages/AuthPages/Reset_Password'
import AuthRedirect from './components/AuthRedirect'
import Dashboard from './pages/Dashboard/Dashboard'
import ProtectedRoute from './components/ProtectedRoutes'

import { ROUTES } from './constants/Routes'
import ProjectDetails from './pages/Dashboard/ProjectDetails'
import ProjectMembers from './pages/Dashboard/ProjectMembers'
import ProjectTasks from './pages/Dashboard/ProjectTasks'
import ProjectEpics from './pages/Dashboard/ProjectEpics'
import Projects from './pages/Dashboard/Projects'
import AddProject from './pages/Dashboard/AddProject'


function App() {
  const location = useLocation();
  const authPages = ["/",
    "/login",
    "/sign-up",
    "/forgot-password",
    "/reset-password",
  ];

  const showHeader = authPages.includes(location.pathname) ;
  return (


    <div className="min-h-screen flex flex-col">
      <AuthRedirect />
      {showHeader && <Header />}
      <div className="flex-1">
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<Forgot_Password />} />
          <Route path="/reset-password" element={<Reset_Password />} />
          <Route
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            
            <Route path={ROUTES.PROJECTS} element={<Projects />}>
              
            
            </Route>
            <Route path={ROUTES.ADD_PROJECT} element ={<AddProject />} />
            <Route path={ROUTES.PROJECTS_EPICS} element={<ProjectEpics />} />
            <Route path={ROUTES.PROJECTS_TASKS} element={<ProjectTasks />} />
            <Route path={ROUTES.PROJECTS_MEMBERS} element={<ProjectMembers />} />
            <Route path={ROUTES.PROJECTS_DETAILS} element={<ProjectDetails />} />
          </Route>

        </Routes>
      </div>
    </div>






  )
}

export default App
