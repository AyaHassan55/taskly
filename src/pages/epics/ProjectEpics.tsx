// import { useState } from "react"
import { useEffect, useState } from "react";
import EmptyEpic from "../../components/ui/project_epic/EmptyEpic"
import { Link, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import getEpicsByProjectId from "../../services/projects/get-epics.service";
import ArrowRight from "../../assets/icons/Icon_rarrow.svg?react"
import getProjectById from "../../services/projects/get-project-by-id.service";
import toast from "react-hot-toast";
import { PATHS, ROUTES } from "../../constants/Routes";
import Button from "../../components/ui/Button";
import SearchIcon from "../../assets/icons/search-icon.svg?react";
import EpicCard from "../../components/EpicCard";
import type { Epic } from "../../types/epics";


interface IProps {



}

const ProjectEpics = ({ }: IProps) => {
  const navigate=useNavigate()
  const { projectId } = useParams();
  const [epics, setEpics] = useState<Epic[]>([]);
  const [projectName, setProjectName] = useState('');
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("access_token");

  // -----------get epics by project id----------------
  useEffect(() => {
    if (!token || !projectId) return;
    const getEpics = async () => {
      setLoading(true);
      try {
        const epicsData = await getEpicsByProjectId(projectId, token);
        setEpics(epicsData);
      } catch (error) {
        console.error("Failed to fetch epics:", error);
      } finally {
        setLoading(false);
      }
    }

    getEpics();
  }, [projectId, token]);
  // -----------get project by id----------------
  useEffect(() => {
    const fetchProject = async () => {
      if (!token || !projectId) return;
      try {
        const project = await getProjectById(token, projectId);
        setProjectName(project.name);
      } catch (error) {
        toast.error("Failed to fetch project:");
      }
    };
    fetchProject();
  }, [token, projectId]);

  if (loading) {
    return <div className="py-8 text-sm text-slate-500">Loading epics...</div>;
  }

  if (!epics.length) return <EmptyEpic projectId={projectId!} />
  return (
    <div>
      {/* breadcrumb */}
      <div className="flex items-center gap-4 mb-2">
        <Link
          to={ROUTES.PROJECTS}
          className="text-xs font-bold uppercase text-[#43465499]"
        >
          PROJECTS
        </Link>

        <ArrowRight className="w-[3.7px] h-1.5 text-[#43465466]" />

        <span className="text-xs font-bold uppercase text-[#43465499]">
          {projectName}
        </span>

        <ArrowRight className="w-[3.7px] h-1.5 text-[#43465466]" />


        <Link to={ROUTES.PROJECT_EPICS} className="text-xs font-bold uppercase text-[#003D9B]">
          Epics
        </Link>



      </div>
      {/* headers and search input */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-[30px] font-bold text-[#041B3C] leading-9 tracking-[-0.75px] ">Project Epics</h1>
        <div className="flex items-center gap-4">
          <label className="flex items-center min-w-73 gap-2 rounded-sm border border-slate-200 bg-[#D7E2FF] px-3 py-3 ">
            <SearchIcon className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="search"
              placeholder="Search epics..."
              className="w-44 border-0 bg-transparent outline-none placeholder:text-slate-400"
            />
          </label>
          <Button onClick={() => projectId && navigate(PATHS.addEpic(projectId))}>+ New Epic</Button>
        </div>
      </div>


      {/* ----content------ */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-8">
            {epics.map(epic => (
              <EpicCard
                key={epic.id}
                epic={epic}
                // onClick={() => handleEpicClick(epic)}
              />
            ))}
          </div>


    </div>
  );
}

export default ProjectEpics