import { useNavigate } from "react-router-dom"
import PlusIcon from "../../../assets/icons/Icon_add.svg?react"
import AddProject from "../../../assets/icons/add-new-proj.svg?react"
import { ROUTES } from "../../../constants/Routes"
import { useEffect, useState } from "react"
import { getProjects } from "../../../services/projects/get-projects.service"
import Cookies from "js-cookie"
import LoadingProject from "../../../components/LoadingProject"
import ErrorProject from "../../../components/ErrorProject"
import EmptyProject from "../../../components/EmptyProject"
import ArrowIcon from "../../../assets/icons/Icon_rarrow.svg?react"
import type { Project } from "../../../types/project"
import ProjectCard from "../../../components/ProjectCard"
import { formatDate } from "../../../utils/date-format"
interface IProps {



}

const Projects = ({ }: IProps) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 4;
  const totalPages = Math.ceil(totalCount / limit);

  const navigate = useNavigate()

  // get projects from
  useEffect(() => {
    const getProjectList = async () => {
      try {
        const token = Cookies.get("access_token");
        if (!token) {
          navigate(ROUTES.LOGIN)
          return
        }
        setLoading(true)
        const offset = (currentPage - 1) * limit;
        const res = await getProjects(token, limit, offset)
        setProjects(res.data)
        setTotalCount(res.totalCount)

      } catch (err: any) {
        if (err.status === 401) {
          navigate(ROUTES.LOGIN)
          return;
        }

        setError(true);
      } finally {
        setLoading(false)
      }

    }
    getProjectList()

  }, [navigate, currentPage]);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  if (loading) {
    return <LoadingProject />

  }
  if (error) return <ErrorProject />

  if (!projects.length) return <EmptyProject />

  return (
    <div className="px-3 py-5 md:p-0 ">

      <div className="flex items-center justify-between md:pr-0">
        <div className="gap-1 px-4 md:px-0  mt-3 md:mt-0">
          <h1 className=" md:font-semibold font-bold md:text-[30px] text-[24px] leading-8  md:leading-9 tracking-[-0.6px] md:tracking-[-0.75px] text-[#041B3C] ">Projects</h1>
          <p className="md:font-normal text-[16px] leading-6 text-[#434654]  ">Manage and Create your project</p>
        </div>
        <button
          onClick={() => navigate(ROUTES.ADD_PROJECT)}
          className="hidden md:flex justify-center gap-2 rounded-xs items-center md:py-3 md:px-6 bg-linear-to-br from-[#003D9B] to-[#0052CC] shadow_[0px_1px_2px_0_#0000000D] cursor-pointer">
          <PlusIcon className="w-[10.5px] h-[10.5px] " />
          <span className="text-[#ffffff] text-[16px] leading-6 font-medium ">Create new Project</span>
        </button>

      </div>

      {/* body of project page */}
      <main className="my-9 pb-40 transition-all duration-300 ease-in-out md:pb-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          projects.map((project) => {
            return < ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              createdAt={formatDate(project.created_at)}
              onClick={() => navigate(`/project/${project.id}/epics`)}
            />
          })
        }
        {/* add project box */}
        <div className=" rounded-lg border-2 border-dashed border-[#C3C6D633] p-6 bg-white hidden md:flex
           flex-col  items-center justify-center cursor-pointer hover:border-primary transition-all">


          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="bg-[#F1F3FF] w-12 h-12 rounded-xl flex items-center justify-center ">
              <AddProject className="text-black h-12  " onClick={() => navigate(ROUTES.ADD_PROJECT)} />
            </div>
            <p className="text-[#434654] font-bold text-[14px] leading-[1.4px] tracking-[1.4px] ">ADD PROJECT</p>
          </div>
        </div>
      </main>
      {/* floating action button */}
      <button onClick={() => navigate(ROUTES.ADD_PROJECT)}
        className="mt-50 fixed md:hidden bottom-18 right-6 w-14 h-14 bg-linear-to-br from-[#003D9B] to-[#0052CC] text-white text-[24px]
                rounded-xl shadow-lg  hover:scale-110 transition-all flex items-center justify-center z-50"
      >+
      </button>

      {/* pagination */}
      {totalPages > 1 && <div className="hidden md:flex justify-between items-center px-8 pt-12 pb-8 ">
        <div>
          <p className="text-[#434654] text-[12px] font-medium leading-4 ">Showing {projects.length} of {totalCount} active projects</p>
        </div>

        <div className="flex items-center justify-center gap-2 ">
          {/* prev button */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="flex items-center justify-center rotate-180 border border-[#C3C6D64D] rounded-xs w-8 h-8  cursor-pointer ">

            <ArrowIcon className="text-[#434654] w-[4.31px] h-1.75 " />


          </button>
          {
            pages.map((page) => (
              <button onClick={() => setCurrentPage(page)} className={` cursor-pointer border border-[#C3C6D64D] rounded-xs w-8 h-8  ${currentPage === page ? " bg-[#003D9B] " : ""}`}>
                <span className={`text-[12px] font-bold leading-4 text-[#434654] transition-shadow ${currentPage === page ? "text-[#FFFFFF]" : "text-[#434654]"} `}>{page}</span>
              </button>
            ))
          }
          {/* next button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="flex items-center justify-center border border-[#C3C6D64D] rounded-xs  w-8 h-8  cursor-pointer">
            <ArrowIcon className="text-[#434654] w-[4.31px] h-1.75 " />
          </button>
        </div>


      </div>}

    </div>
  )
}

export default Projects