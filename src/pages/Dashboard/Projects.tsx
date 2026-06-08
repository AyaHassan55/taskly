import { useNavigate } from "react-router-dom"
import PlusIcon from "../../assets/icons/Icon_add.svg?react"
import { ROUTES } from "../../constants/Routes"
interface IProps {



}

const Projects=({}:IProps)=> {
  const navigate=useNavigate()
    return (
    <div className="">
     {/* project tiles */}
     <div className="flex items-center justify-between md:pr-0">
        <div className="gap-1">
            <h1 className="md:font-semibold md:text-[30px] md:leading-9 md:tracking-[-0.75px] text-[#041B3C] ">Projects</h1>
            <p className="md:font-normal text-[16px] leading-6 text-[#434654]  ">Manage and Create your project</p>
        </div>
        <button 
          onClick={()=>navigate(ROUTES.ADD_PROJECT)}
           className="flex justify-center gap-2 rounded-xs items-center md:py-3 md:px-6 bg-linear-to-br from-[#003D9B] to-[#0052CC] shadow_[0px_1px_2px_0_#0000000D] cursor-pointer">
           <PlusIcon className="w-[10.5px] h-[10.5px] "  />
           <span className="text-[#ffffff] text-[16px] leading-6 font-medium ">Create Your Project</span>
           </button>

     </div>

    </div>
  )
}

export default Projects