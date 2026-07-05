// import { useState } from "react"
import { useEffect, useState } from "react";
import EmptyEpic from "../../components/ui/project_epic/EmptyEpic"
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import getEpicsByProjectId from "../../services/projects/get-epics.service";

interface IProps {



}

const ProjectEpics=({}:IProps)=> {
  const { projectId } = useParams();
  const [epics, setEpics] = useState([]);
  const [loading,setLoading]=useState(false);
    const token = Cookies.get("access_token");

  // -----------get epics by project id----------------
  useEffect(() => {
    if(!token || !projectId) return;
    const getEpics = async ()=>{
      setLoading(true);
      try {
        const epicsData = await getEpicsByProjectId(projectId,token);
        setEpics(epicsData);
      } catch (error) {
        console.error("Failed to fetch epics:", error);
      } finally {
        setLoading(false);
      }
    }


  getEpics();


  },[projectId]);

  if(epics.length === 0)return <EmptyEpic projectId={projectId! }/>
  return (
    <div>
        <h1>project epics</h1>


    </div>
  )
}

export default ProjectEpics