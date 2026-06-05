import Navbar from "../../components/layout/Navbar/Navbar"
import Sidebar from "../../components/layout/Sidebar/Sidebar"

interface IProps {



}

const Dashboard=({}:IProps)=> {
  return (
    <div className="flex min-h-screen">
    
    <Sidebar/>
    <div className="flex-1 ">
        <Navbar  />
        </div>
    </div>
  )
}

export default Dashboard