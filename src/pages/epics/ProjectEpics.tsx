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
import Pagination from "../../components/Pagination";


interface IProps {



}

const ProjectEpics = ({ }: IProps) => {
  const navigate = useNavigate()
  const { projectId } = useParams();
  const [epics, setEpics] = useState<Epic[]>([]);
  const [projectName, setProjectName] = useState('');
   const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 4;

  const totalPages = Math.ceil(totalCount / limit);
  const token = Cookies.get("access_token");

  // -----------get epics by project id----------------
  useEffect(() => {
    if (!token || !projectId) return;
    const getEpics = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * limit;
        const epicsData = await getEpicsByProjectId(projectId, token,limit,offset);
        setEpics(epicsData.data);
        setTotalCount(epicsData.totalCount)
      } catch (error) {
        console.error("Failed to fetch epics:", error);
      } finally {
        setLoading(false);
      }
    }

    getEpics();
  }, [projectId, token,currentPage]);

  useEffect(() => {
  setCurrentPage(1);
}, [projectId]);
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

  return (
    <div className="px-6 md:px-0">
      {/* breadcrumb */}
      <div className="hidden md:flex items-center gap-4 mb-2">
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
      {/* headers and search input desktop */}
      <div className="hidden md:flex items-center justify-between gap-4">
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
      {/* serach input in mobile */}
      <label className="md:hidden flex items-center min-w-73 gap-2 rounded-lg border border-slate-200 bg-[#D7E2FF] px-3 py-3 ">
            <SearchIcon className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="search"
              placeholder="Search epics..."
              className="w-44 border-0 bg-transparent outline-none placeholder:text-slate-400"
            />
          </label>

      {/* ----content------ */}
      {epics.length === 0 ? (
        <div className="mt-8">
          <EmptyEpic projectId={projectId!} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-8">
          {epics.map((epic) => (
            <EpicCard
              key={epic.id}
              epic={epic}
            />
          ))}
        </div>
      )}

      {/* pagination */}
      {totalPages > 1 && <div className="hidden md:flex justify-between items-center px-8 pt-12 pb-8 ">
        <div>
          <p className="text-[#434654] text-[12px] font-medium leading-4 ">Showing {epics.length} of {totalCount} active projects</p>
        </div>

       <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />


      </div>}

    </div>
  );
}

export default ProjectEpics