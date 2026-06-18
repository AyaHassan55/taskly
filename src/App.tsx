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
import ProjectMembers from './pages/Dashboard/ProjectMembers'
import ProjectTasks from './pages/Dashboard/ProjectTasks'
import ProjectEpics from './pages/Dashboard/ProjectEpics'
import Projects from './pages/Dashboard/projects/Projects'
import AddProject from './pages/Dashboard/projects/AddProject'
import EditProject from './pages/Dashboard/projects/ProjectDetails'


function App() {
  const location = useLocation();
  const authPages = ["/",
    "/login",
    "/sign-up",
    "/forgot-password",
    "/reset-password",
  ];

  const showHeader = authPages.includes(location.pathname);
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


            <Route path="/project">
              <Route index element={<Projects />} />
              <Route path="add" element={<AddProject />} />
            </Route>
            <Route path="/project/:projectId/epics" element={<ProjectEpics />} />

            <Route path="/project/:projectId/tasks" element={<ProjectTasks />} />

            <Route path="/project/:projectId/members" element={<ProjectMembers />} />

            <Route path="/project/:projectId/edit" element={<EditProject />} />
            <Route
              path="/project/:projectId/edit"
              element={<EditProject />}
            />
          </Route>

        </Routes>
      </div>
    </div>






  )
}

export default App
