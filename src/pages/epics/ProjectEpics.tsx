// import { useState } from "react"
import EmptyEpic from "../../components/ui/project_epic/EmptyEpic"
import { useParams } from "react-router-dom";

interface IProps {



}

const ProjectEpics=({}:IProps)=> {
  const { projectId } = useParams();
  // const [loading,setLoading]=useState(false)

  if(true)return <EmptyEpic projectId={projectId! }/>
  return (
    <div>
        <h1>project epics</h1>


    </div>
  )
}

export default ProjectEpics