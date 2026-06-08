import { Link } from "react-router-dom"
import { ROUTES } from "../../constants/Routes"
import ArrowRight from "../../assets/icons/Icon_rarrow.svg?react"
import InviteMember from "../../assets/icons/Icon-project-member.svg?react"
import InitProjectIcon from "../../assets/icons/inint-project.svg?react"
import IconError from "../../assets/icons/Icon-err.svg?react"
import IconTips from "../../assets/icons/Icon-tip.svg?react"
import { zodResolver } from "@hookform/resolvers/zod"
import { addProjectctSchema, type addProjectFormData } from "../../schemas/add_project.schema"
import { useForm } from "react-hook-form"



interface IProps {



}

const AddProject = ({ }: IProps) => {

  const { register,
    handleSubmit,
    formState: { errors },

  } = useForm<addProjectFormData>({
    resolver: zodResolver(addProjectctSchema),
    mode: 'onChange',
  });
  const onSubmit = (data: addProjectFormData) => {
    console.log(data);
  };
  return (

    <div className=" ">

      {/* creadcrumps and header  */}
      <div className="hidden md:flex items-end justify-between ">
        {/* creadcrumbs */}
        <div className="">
          <div className="flex items-center gap-4 mb-2 ">
            <Link
              to={ROUTES.PROJECTS}
              className="text-xs font-bold uppercase text-[#43465499] leading-4 tracking-[1.2px] "
            >
              PROJECTS
            </Link>

            <ArrowRight className="w-[3.7px] h-1.5 text-[#43465466]" />



            <span className="text-xs font-bold uppercase text-[#003D9B] leading-4 tracking-[1.2px] ">
              Add New Project
            </span>
          </div>

          <h1 className="text-[36px] font-semibold text-[#041B3C] leading-10 tracking-[-0.9px] ">
            Add New Project
          </h1>

        </div>
        <button className="flex justify-center gap-2 rounded-xs items-center md:py-3 md:px-6 
        bg-linear-to-br from-[#003D9B] to-[#0052CC] shadow_[0px_1px_2px_0_#0000000D] cursor-pointer">

          <InviteMember className='w-[18.33px] h-[13.33px] text-[#FFFFFF] ' />
          <span className="text-sm font-bold  text-[#FFFFFF] leading-5  ">
            Invite Member
          </span>
        </button>


      </div>

      {/* form for add project */}
      <div className="md:mt-10 w-full md:px-4 md:min-h-screen flex items-start justify-center">
        <div className="w-full min-h-screen md:bg-[#FFFFFF] md:shadow_[0_1px_2px_0_#0000000D] md:border md:border-transparent md:rounded-lg  md:max-w-xl flex flex-col items-start justify-start ">
          {/* ----------header form------------ */}
          <header className="flex border-b border-[#F1F3FF] px:[32px] p-8 ">
            <div className="md:flex md:items-center md:justify-center md:gap-4">
              {/* icon */}
              <div className="hidden md:flex w-11.5 h-11 items-center bg-[#0052CC1A] border border-transparent rounded-sm sm p-3">
                <InitProjectIcon className="w-5.5 h-5 " />
              </div>
              {/* titles */}
              <div className=" flex flex-col">


                <h1 className="text-[#041B3C] font-semibold text-[24px] leading-8 ">Initialize New Project</h1>
                <p className="text-[#4F5F7B] font-normal text-[14px] leading-5  ">Define the scope and foundational details of your project.</p>
              </div>
            </div>

          </header>

          {/*---------- main form------------- */}

         
           <form className="w-full min-h-121.75 flex  flex-col p-8 " onSubmit={handleSubmit(onSubmit)}>
            {/* project title input */}
            <div className="flex  flex-col gap-2 w-full mt-3">
              <label className="text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase">
                Project title<span className="text-red-600"> *</span>
              </label>

              <input
                type='text'
                placeholder="add project"
                {...register("name")}
                className={`h-12  w-full   border  rounded-sm
                  py-3.5 px-4  transition-all
                  bg-[#D7E2FF]
                placeholder:text-[#737685]
                  placeholder:text-[16px]
                  focus:outline-none
               focus:border-blue-500 


                  ${errors.name
                     ? "border-red-500 focus:border-red-500"
  : "border-transparent focus:border-blue-500"
                  }`

                }
              />
              {errors.name && (
                <div className="flex items-center justify-start gap-1.5 mb-2.5">
                  <IconError className="w-[13.33px] h-[13.33px] "/>
                  <p className="text-[#BA1A1A] text-xs font-medium leading-4 ">
                  {errors.name.message}
                </p>
                </div>
              )}


            </div>
            {/* description field */}
            <div className="flex  flex-col gap-2 w-full mt-3">
              <div className="flex items-center justify-between">
                <label className="text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase">
                  Description
                </label>
                <p className="text-[#4F5F7B99] font-normal leading-[16.5px] text-[11px] ">Optional</p>
              </div>

              {/* 2----------- */}
              <textarea
                placeholder="Provide a high-level overview of the project's architectural objectives and key milestones..."
                className={`
                     w-full min-h-30 bg-[#D7E2FF] border-2
    rounded-sm
    px-4 py-3
    resize-none
    placeholder:text-[#4F5F7B80]
    placeholder:text-[16px]
    placeholder:leading-6
    focus:outline-none
    ${errors.description

                    ? "border-red-500"
                    : "border-transparent focus:border-blue-500"
                  }
  `}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
              {/* 3-------------- */}
              <div className="flex justify-between">
                <label className="text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase">

                </label>
                <p className="font-medium text-[11px] leading-[16.5px] text-[#4F5F7B] ">0 / 500 characters</p>
              </div>


            </div>
            {/* Action  */}
            <div className="flex md:flex-row flex-col flex-col-reverse justify-between items-center mt-auto pt-4 gap-4 md:gap-1 ">
              <Link to={ROUTES.PROJECTS} className="md:text-[14px] text-[16px] md:font-bold font-medium md:leading-5 leading-6 md:text-[#4F5F7B] text-[#003D9B] " >Back</Link>
              <button className="flex justify-center gap-2 md:rounded-xs rounded-lg w-full md:w-auto items-center md:py-3 py-4 md:px-6
                        shadow-[0px_4px_6px_-4px_#003D9B33] 
                        bg-linear-to-br from-[#003D9B] to-[#0052CC]  cursor-pointer">


                <span className="text-sm font-bold  text-[#FFFFFF] leading-5  ">
                  Create project
                </span>
              </button>


            </div>
          </form>
         {/* ----------footer section---------- */}
         <div className="flex items-start  md:flex-row flex-col  gap-3 p-6 bg-[#F1F3FF] mb-22 mt-7 md:mt-0 md:mb-0 ">
          <IconTips className= "hidden md:block w-[11.25px] h-3.75 " />
          <p className="font-bold text-xs leading-[19.5px] text-[#4F5F7B]">Pro Tip: 
            <span className="font-normal text-xs leading-[100%] text-[#4F5F7B]" > You can invite project members and assign epics immediately after the initial creation process.</span>
          </p>

         </div>



        </div>
      </div>

    </div>



  )
}

export default AddProject