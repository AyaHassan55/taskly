import { useNavigate } from "react-router-dom"
import PlusIcon from "../../assets/icons/Icon_add.svg?react"
import { ROUTES } from "../../constants/Routes"
import { useEffect, useState } from "react"
import { getProjects } from "../../services/projects/get-projects.service"
import Cookies from "js-cookie"
import LoadingProject from "../../components/LoadingProject"
import ErrorProject from "../../components/ErrorProject"
import EmptyProject from "../../components/EmptyProject"
import type { Project } from "../../types/project"
import ProjectCard from "./ProjectCard"
import { formatDate } from "../../utils/date-format"
interface IProps {



}

const Projects=({}:IProps)=> {
  const [projects,setProjects]=useState<Project[]>([])
  const [loading ,setLoading]=useState(true)
  const [error ,setError]=useState(false)
  
  const navigate=useNavigate()
  
  // useEffect(()=>{
  //   const getProjectList = async()=>{
  //   try{
  //     const token=Cookies.get("access_token");
  //     if(!token){
  //       navigate(ROUTES.LOGIN)
  //       return
  //     }
  //     setLoading(true)
  //     const res = await getProjects(token)
  //     setProjects(res)

  //   }catch(err:any){
  //    if (err.status === 401) {
  //       navigate(ROUTES.LOGIN)
  //       return;
  //     }

  //     setError(true);
  //   }finally{
  //      setLoading(false)
  //   }
  // }
  // getProjectList()
   
  // },[navigate])
      if(loading){
        return <LoadingProject />
       
      }
      // if(error){
      //   return <ErrorProject />
      // }
      // if (!loading && projects.length === 0){
      //   return <EmptyProject />
      // }
      return (
    <div className="">
     
     <div className="flex items-center justify-between md:pr-0">
        <div className="gap-1">
            <h1 className="md:font-semibold md:text-[30px] md:leading-9 md:tracking-[-0.75px] text-[#041B3C] ">Projects</h1>
            <p className="md:font-normal text-[16px] leading-6 text-[#434654]  ">Manage and Create your project</p>
        </div>
        <button 
          onClick={()=>navigate(ROUTES.ADD_PROJECT)}
           className="hidden md:flex justify-center gap-2 rounded-xs items-center md:py-3 md:px-6 bg-linear-to-br from-[#003D9B] to-[#0052CC] shadow_[0px_1px_2px_0_#0000000D] cursor-pointer">
           <PlusIcon className="w-[10.5px] h-[10.5px] "  />
           <span className="text-[#ffffff] text-[16px] leading-6 font-medium ">Create new Project</span>
        </button>

     </div>

     {/* body of project page */}
     <main  className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          projects.map((project)=>{
            return < ProjectCard  
            key={project.id} 
            name={project.name}
            description={project.description}
            createdAt={formatDate(project.created_at)} 
            />
          })
        }
     </main>

    </div>
  )
}

export default Projects