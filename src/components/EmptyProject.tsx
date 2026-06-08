import EmptyProjImage from "../assets/images/EmptyImage.svg?react"
import AddNewProject from "../assets/icons/add-new-proj.svg?react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../constants/Routes"
const EmptyProject = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center gap-10.75 ">
      <EmptyProjImage className="md:w-[288px] md:h-72 w-[100px] h-[100px] " />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-[#041B3C] font-semibold md:text-[36px] text-[28px] leading-10 tracking-[-0.9px] ">No Projects</h1>
        <p className="text-center mx-w-[448px] text-[#434654] font-normal text-[18px] leading-[29.25px] ">You do not have any projects yet. Start by defining
          your first architectural workspace to begin tracking
          tasks and epics.</p>
      </div>
        <button  onClick={()=>navigate(ROUTES.ADD_PROJECT)}
         
         className="flex justify-center gap-2 rounded-xs items-center py-3 px-6 
        bg-linear-to-br from-[#003D9B] to-[#0052CC] shadow_[0px_25px_50px_-12px_#003D9B4D] cursor-pointer">

          <AddNewProject className='w-[18.33px] h-[13.33px] text-[#FFFFFF] ' />
          <span className="text-[18px] font-bold  text-[#FFFFFF] leading-7  ">
            Create  New Project
          </span>
        </button>


    </div>
  )
}

export default EmptyProject