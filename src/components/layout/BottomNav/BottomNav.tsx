import projectIcon from "../../../assets/icons/Icon-project.svg";
import projectEpicIcon from "../../../assets/icons/Icon-project-ipik.svg";
import projectTaskIcon from "../../../assets/icons/Icon-project.-tasksvg.svg";
import projectMemberIcon from "../../../assets/icons/Icon-project-member.svg";
import projectDetailsIcon from "../../../assets/icons/Icon-project-detail.svg";
import { useState } from "react";
import { ROUTES } from "../../../constants/Routes";
import { useLocation, useNavigate } from "react-router-dom";

const BottomNav = () => {
   
    const location =useLocation()
    const navigate=useNavigate()
   const items = [
        { id: "projects", label: "Projects", icon: projectIcon ,path:ROUTES.PROJECTS},
        { id: "epics", label: "Project Epics", icon: projectEpicIcon ,path:ROUTES.PROJECTS_EPICS},
        { id: "tasks", label: "Project Tasks", icon: projectTaskIcon,path:ROUTES.PROJECTS_TASKS },
        { id: "members", label: "Project Members", icon: projectMemberIcon,path:ROUTES.PROJECTS_MEMBERS },
        { id: "details", label: "Project Details", icon: projectDetailsIcon,path:ROUTES.PROJECTS_DETAILS },
    ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] flex justify-around py-2 md:hidden z-40">
      {items.map((item) => {
       const isActive = location.pathname === item.path;
       return(
 <button
          key={item.label}
          onClick={()=>navigate(item.path)}
          className="flex flex-col items-center gap-1"
        >
          <img src={item.icon} alt={item.label} className={`w-5 h-5 ${isActive ? "opacity-100":"opacity-40"}`} />

          <span className={`text-[10px] leading-3.75 ${isActive ? "text-[#0052CC] font-semibold":"text-[#041B3CB2] font-normal"} `}>
            {item.label}
          </span>
        </button>
       );


       
     }
      )}
    </div>
  );
};

export default BottomNav;