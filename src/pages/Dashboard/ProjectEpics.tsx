import { useState } from "react"
import EmptyEpic from "../../components/ui/project_epic/EmptyEpic"

interface IProps {



}

const ProjectEpics=({}:IProps)=> {
  const [loading,setLoading]=useState(false)

  if(true)return <EmptyEpic />
  return (
    <div>
        <h1>project epics</h1>


    </div>
  )
}

export default ProjectEpics