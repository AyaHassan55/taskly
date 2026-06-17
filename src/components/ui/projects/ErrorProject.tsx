import ErrorImage from "../../../assets/images/ErrorProject.svg?react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../../constants/Routes"
const ErrorProject = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center gap-10.75 ">
      <ErrorImage className=" w-16[64px] h-16 " />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-[#041B3C] font-semibold md:text-[20px] text-[20px] leading-7 ">Something went wrong</h1>
        <p className="text-center  text-[#434654] font-normal text-[16px] leading-6 ">You do not have any projects yet. Start by defining
          We're having trouble retrieving your projects right now. Please try again in a moment.</p>
      </div>
        <button  onClick={()=>navigate(ROUTES.PROJECTS)}
         
         className="flex justify-center gap-2 rounded-xs items-center py-3 px-6 
        bg-linear-to-br from-[#003D9B] to-[#0052CC] shadow_[0px_25px_50px_-12px_#003D9B4D] cursor-pointer">

          
          <span className="text-[18px] font-bold  text-[#FFFFFF] leading-7  ">
            Retry Connection
          </span>
        </button>


    </div>
  )
}

export default ErrorProject