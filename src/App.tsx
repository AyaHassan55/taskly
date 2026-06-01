

import './App.css'
import Header from './components/Header'
import Signup from './pages/Signup'

function App() {


  return (
   
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Signup />
        </div>
      </div>

     

      
     
    
  )
}

export default App
