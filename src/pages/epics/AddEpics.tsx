import { useParams } from "react-router-dom";
import ProjectPageHeader from "../../components/ui/proiectPageHeader"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import getProjectById from "../../services/projects/get-project-by-id.service";
import toast from "react-hot-toast";
interface IProps {



}

const AddEpics = ({ }: IProps) => {
  const { projectId } = useParams();
  const [projectName, setProjectName] = useState('')
  //  get project by id
  console.log(projectId);
  useEffect(() => {
    const fetchProject = async () => {
      const token = Cookies.get("access_token");

      if (!token || !projectId) return;

      try {
        const project = await getProjectById(token, projectId);
        setProjectName(project.name)



      } catch(error) {
        console.log(error)
        toast.error("Failed to load project");
      }
    };

    fetchProject();
  }, [projectId]);
  console.log(projectName)
  return (
    <div>
      {/* breadcrumbs */}
      {/* creadcrumps and header  */}
      <ProjectPageHeader
        checkWord="epic"
        projectName={projectName}
        pageTitle="Create New Epics"
        currentPage="new epic"
        showInviteButton={false}
      />
      {/* ---------form------------ */}
      <form className="bg-white w-full mx-w-[848px] border border-[#C3C6D61A] rounded-lg pt-2 pb-4 mt-8 ">
        {/* title epic */}
        <div className="grid grid-cols-4 gap-6 px-6">
          {/* Label */}
          <div className="col-span-1 pt-2 h-6.25">
            <label className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] ">
              Title <span className="text-red-500 font-bold text-[11px]">*</span>
            </label>
          </div>

          {/* Input */}
          <div className="col-span-3 w-full">
            <input
              type="text"
              placeholder="e.g. Structural Foundation Phase"
              className="w-full h-11.75 border border-transparent rounded-sm px-4 py-3.5
         bg-[#D7E2FF] placeholder:text-[16px] 
         placeholder:leading-[100%] placeholder:text-[#43465466]
         active:border-blue-600 
         "
            />
          </div>
        </div>

        {/* description */}
        <div className="grid grid-cols-4 gap-6 px-6">
          {/* Label */}
          <div className="col-span-1 pt-2 h-6.25 flex flex-col">
            <label className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] ">
              Description 
            </label>
            <p>optional</p>
          </div>

          {/* Input */}
          <div className="col-span-3 w-full">
            <input
              type="text"
              placeholder="e.g. Structural Foundation Phase"
              className="w-full h-11.75 border border-transparent rounded-sm px-4 py-3.5
         bg-[#D7E2FF] placeholder:text-[16px] 
         placeholder:leading-[100%] placeholder:text-[#43465466]
         active:border-blue-600 
         "
            />
          </div>
        </div>


      </form>

    </div>
  )
}

export default AddEpics