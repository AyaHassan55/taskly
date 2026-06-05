import projectIcon from "../../../assets/icons/Icon-project.svg";
import projectEpicIcon from "../../../assets/icons/Icon-project-ipik.svg";
import projectTaskIcon from "../../../assets/icons/Icon-project.-tasksvg.svg";
import projectMemberIcon from "../../../assets/icons/Icon-project-member.svg";
import projectDetailsIcon from "../../../assets/icons/Icon-project-detail.svg";
import { useState } from "react";

const BottomNav = () => {
    const [active, setActive] = useState("Projects");
  const items = [
    { id: "Projects", label: "Projects", icon: projectIcon },
  { id: "Epics", label: "Epics", icon: projectEpicIcon },
  { id: "Tasks", label: "Tasks", icon: projectTaskIcon },
  { id: "Members", label: "Members", icon: projectMemberIcon },
  { id: "Details", label: "Details", icon: projectDetailsIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] flex justify-around py-2 md:hidden z-40">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={()=>setActive(item.id)}
          className="flex flex-col items-center gap-1"
        >
          <img src={item.icon} alt={item.label} className={`w-5 h-5 ${active === item.id ? "opacity-100":"opacity-40"}`} />

          <span className={`text-[10px] leading-3.75 ${active === item.id ? "text-[#0052CC] font-semibold":"text-[#041B3CB2] font-normal"} `}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;