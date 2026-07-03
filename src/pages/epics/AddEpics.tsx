import { useNavigate, useParams } from "react-router-dom";
import ProjectPageHeader from "../../components/ui/proiectPageHeader"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import getProjectById from "../../services/projects/get-project-by-id.service";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEpicSchema, type CreateEpicFormData } from "../../schemas/add_epic.schema";
import { useForm } from "react-hook-form";

import SelectField from "../../components/ui/SelectField";
import type { ProjectMember } from "../../types/members";
import getProjectMembers from "../../services/get-members.service";
import Button from "../../components/ui/Button";
import { ROUTES } from "../../constants/Routes";
import addEpicService from "../../services/projects/add-epic.service";
import IconError from "../../assets/icons/Icon-err.svg?react"
interface IProps {



}

const AddEpics = ({ }: IProps) => {


  const navigate = useNavigate();
  const { projectId } = useParams();
  const [projectName, setProjectName] = useState('')
  const [members, setMembers] = useState<ProjectMember[]>([]);
  const [isMemberLoading, setIsMemberLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = Cookies.get("access_token");
 
  // ---------get project by id-----------
  useEffect(() => {
    const fetchProject = async () => {


      if (!token || !projectId) return;

      try {
        const project = await getProjectById(token, projectId);
        setProjectName(project.name)



      } catch (error) {

        toast.error("Failed to load project");
      }
    };

    fetchProject();
  }, [projectId]);

  // --------get members-------------
  useEffect(() => {
    if (!projectId) return;

    const fetchMembers = async () => {
      try {

        if (!token || !projectId) return;
        setIsMemberLoading(true);
        const members = await getProjectMembers(token, projectId);
        setMembers(members);
      }
      catch (error) {
        toast.error("Failed to load members");
      } finally {
        setIsMemberLoading(false);
      }
    }





    fetchMembers();

  }, [projectId]);

  //---------handle form submit-------------
  const onSubmit = async (data: CreateEpicFormData) => {
    if (!token || !projectId) {
      toast.error("Missing project or authentication");
      return;
    }
    try {
      setIsLoading(true);
      await addEpicService(token, { ...data, project_id: projectId });
      
      toast.success("Epic created successfully");
      navigate(ROUTES.PROJECT_EPICS.replace(":projectId", projectId));

    } catch (error) {
      toast.error("Failed to create epic");
    } finally {
      setIsLoading(false);
    }
  }
  // --------handel cancel button click-------------
  const handleCancel = () => {
    if (projectId) {
      navigate(ROUTES.PROJECT_EPICS.replace(":projectId", projectId));
    } else {
      navigate(ROUTES.PROJECTS);
    }

  }
  //--------- zod validation-----------
  const {
    register, control,
    handleSubmit,
    watch,
    formState: { errors },
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
      <div className='md:mx-10'>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full  md:max-w-[848px] border border-[#C3C6D61A] rounded-lg pt-5 pb-4 mt-8 mx-auto ">
          {/* title epic */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4  md:gap-6 px-4 md:px-6">
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
                className={`w-full h-11.75 rounded-sm px-4 py-3.5 bg-[#D7E2FF] placeholder:text-[16px] placeholder:leading-[100%] placeholder:text-[#43465466] 
                    ${
                  errors.title
                    ? ' focus:outline-[#BA1A1A]'
                    : ' focus:outline-blue-600'
                }`}
              />
              {errors.title && (
                <div className="flex justify-start items-center mt-1.5">
                  <IconError />
                  <p className="text-[#BA1A1A] pl-1 uppercase text-[11px] font-medium leading-4 tracking-[0.55px]">
                    {errors.title.message}
                  </p>
                </div>
              )}
            </div>
            
          </div>

          {/* description */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4  md:gap-6 px-4 md:px-6 mt-6">
            {/* Label */}
            <div className="col-span-1 pt-2 h-6.25 flex flex-col">
              <label className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] ">
                Description
              </label>
              <p className="text-[#43465480] text-[10px] leading-3.5" >optional</p>
            </div>

            {/* textarea */}
            <div className="md:col-span-3 w-full">
              <textarea
                rows={5}
                {...register("description")}

                placeholder="Describe the scope and objectives of this epic..."
                className={`w-full  min-h-10.75 border border-transparent rounded-sm px-4 py-3.5
             bg-[#D7E2FF] placeholder:text-[16px] 
               placeholder:leading-6 placeholder:text-[#43465466]
              focus:outline-blue-600
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
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-8 px-3 md:px-6 mt-6">
            <div className="w-full">

              {/* <input placeholder="Select a member..." /> */}
              <SelectField
                control={control}
                name="assignee_id"
                label="ASSIGNEE"

              >
                <option value="">Select a member...</option>
                {isMemberLoading ? (
                  <option value="">Loading members...</option>
                ) : (
                  members.map((member) => (
                    <option key={member.user_id} value={member.user_id}>
                      {member.metadata.name}
                    </option>
                  ))
                )}
              </SelectField>
            </div>


            {/* -------deadline--------- */}
            <div className="w-full">

              {/* <input placeholder="mm/dd/yyyy" /> */}
              <div className="col-span-1 h-6.25 gap-4 flex flex-col">
                <label className="text-[11px] text-[#434654] font-bold uppercase leading-[16.5px] tracking-[1.1px] ">
                  DEADLINE
                </label>
              </div>
              <input
                type="date"
                {...register("deadline")}
                placeholder="mm/dd/yyyy"
                className={`w-full h-11.75 border border-transparent rounded-sm px-4 py-3.5 mb-1
             bg-[#D7E2FF] placeholder:text-[16px] 
               placeholder:leading-[100%] placeholder:text-[#43465466]
               active:border-blue-600  focus:outline-0 ${errors.deadline ? "border-red-500" : "border-transparent focus:border-blue-500"}`} />
            </div>
          </div>

          {/* form actions */}

          <div className="flex flex-col-reverse md:flex-row items-stretch md:items-center justify-end gap-4 pt-8 px-4 md:px-6 mb-14">
            <Button
              type="button"
              variant="ghost"
              onClick={handleCancel}
              disabled={isLoading}
              className="text-slate-700 "
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? 'Creating...' : 'Create Epic'}
            </Button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default AddEpics