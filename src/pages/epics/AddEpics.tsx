import { useParams } from "react-router-dom";
import ProjectPageHeader from "../../components/ui/proiectPageHeader"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import getProjectById from "../../services/projects/get-project-by-id.service";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEpicSchema, type CreateEpicFormData } from "../../schemas/add_epic.schema";
import { useForm } from "react-hook-form";
import FormInput from "../../components/ui/FormInput";
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
  // zod validation
  const {
  register,
  handleSubmit,watch,
  formState: { errors, isSubmitting },
} = useForm<CreateEpicFormData>({
  resolver: zodResolver(createEpicSchema),
});
  const description = watch("description") || "";
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
              type="text" {...register('title')}
              placeholder="e.g. Structural Foundation Phase"
              className={`w-full h-11.75 border border-transparent rounded-sm px-4 py-3.5
             bg-[#D7E2FF] placeholder:text-[16px] 
               placeholder:leading-[100%] placeholder:text-[#43465466]
               active:border-blue-600  focus:outline-0 ${errors.description

                    ? "border-red-500"
                    : "border-transparent focus:border-blue-500"
                  } `}
         
            />
          </div>
           {errors.title && (
            <p>{errors.title.message}</p>
  )}
        </div>

        {/* description */}
        <div className="grid grid-cols-4 gap-6 px-6 mt-6">
          {/* Label */}
          <div className="col-span-1 pt-2 h-6.25 flex flex-col">
            <label className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] ">
              Description 
            </label>
            <p className="text-[#43465480] text-[10px] leading-3.5" >optional</p>
          </div>

          {/* textarea */}
          <div className="col-span-3 w-full">
            <textarea
                rows={5}
              {...register("description")}
              
              placeholder="Describe the scope and objectives of this epic..."
              className={`w-full  min-h-10.75 border border-transparent rounded-sm px-4 py-3.5
             bg-[#D7E2FF] placeholder:text-[16px] 
               placeholder:leading-6 placeholder:text-[#43465466]
             active:border-blue-600 focus:outline-none
             ${errors.description

                    ? "border-red-500"
                    : "border-transparent focus:border-blue-500"
                  }`}
         
            />
            {/* 3-------------- */}
              <div className="flex justify-between">
                <label className="text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase">

                </label>
                <p className="font-medium text-[11px] leading-[16.5px] text-[#4F5F7B] ">{description.length} / 500 characters</p>
              </div>
          </div>
        </div>

        {/* Assignee row */}
        <div className="flex">
          <div>
            <label >Assignee</label>
            <input placeholder="Select a member..." />
          </div>
        </div>


      </form>

    </div>
  )
}

export default AddEpics