import type { Epic } from "../types/epics";
import { getAvatarLetters } from "../utils/get-avatar-letter";
import DotsIcon from "../assets/icons/DotsIcon.svg?react"
import IconPeople from "../assets/icons/IconPeople.svg?react"
import EventIcon from "../assets/icons/EventIcon.svg?react"

interface IProps {

    epic: Epic;
    onClick?: () => void;


}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
const EpicCard = ({ epic, onClick }: IProps) => {
    return (
        <div className="rounded-md p-6  md:border border-transparent md:border-l-4 md:border-l-[#004E32] bg-[#FFFFFF]" onClick={onClick}>
            {/* ------badge--------- */}
            <div className="flex items-center justify-between">
                <h4 className=" text-[11px] md:text-[10px] font-bold leading-3.75 tracking-[0.5px] md:text-[#005235] text-[#003D9B] md:bg-[#82F9BE] bg-[#DAE2FF]
                               border border-transparent rounded-xs py-1 px-2.5 text-center ">
                    {epic.epic_id}
                </h4>
                <DotsIcon className="cursor-pointer" />
            </div>
         
            <h3 className="text-[#041B3C] font-semibold text-[18px] md:text-[20px] leading-7 pb-3 mt-3 ">{epic.title}</h3>
                {/* avatar and name desktop */}
            <div className="hidden md:flex items-center">
                <div className="flex items-center justify-center">
                    {/* avatar */}
                    <div className="flex items-center justify-center bg-[#65DCA4] text-[#002113] border border-transparent w-10 h-10 rounded-xl  "> 
                        <p className="text-[#002113] font-bold text-[14px] leading-5 ">{getAvatarLetters(epic.assignee?.name)}</p>
                    </div>
                    {/* --------- */}
                    <div className="ml-4">
                        <h5 className="text-[#434654] text-[12px] leadign-4 ">Assignee</h5>
                        <p className="text-[#041B3C] font-semibold text-[14px] leading-5 ">{epic.assignee?.name}</p>
                    </div>


                </div>
            </div>
                {/* avatar and name mob */}
            <div className=" md:hidden flex items-center justify-between">
                <div className="flex items-center justify-center">
                    {/* avatar */}
                    
                    <div className="flex items-center justify-center bg-[#003D9B] text-[#FFFFFF] border border-transparent w-7 h-7 rounded-xl pt-1.5 pb-2 "> 
                        <p className="text-[FFFFFF] font-bold text-[10px] leading-4 ">{getAvatarLetters(epic.assignee?.name)}</p>
                    </div>
                    {/* --------- */}
                    <div className="ml-4">
                        
                        <p className="text-[#041B3C] font-medium text-[12px] leading-4 ">{epic.assignee?.name}</p>
                        <h5 className="text-[#737685] text-[10px] leadign-4 ">Assignee</h5>
                    </div>
                    


                </div>
                <div className="">
                        <h5 className="text-[#737685] text-[10px] text-bold leadign-4 uppercase">Deadline</h5>
                        <p className=" text-[#041B3C] text-[11px] leading-4 ">{formatDate(epic.created_at)}</p>
                    </div>
            </div>
            {/* created by $ date desktop */}
            <div className="hidden md:flex mt-12 justify-between border-t border-t-[#e9eaf07a]">
                <div className="flex items-center justify-center mt-5">
                   <IconPeople    />
                   <p className="pl-1 font-normal text-[11px] leading-4.5 text-slate-700 ">Created by: 
                    <span className="text-[#041B3C] font-bold text-[11px] pl-2">{epic.created_by.name}</span></p>
                </div>
                {/* ------------------- */}
                <div className="flex items-center justify-center">
                    <EventIcon />
                    <p className="pl-2 text-[#434654CC] text-[11px] leading-4 ">{formatDate(epic.created_at)}</p>
                </div>
            </div>
        </div>
    );
};

export default EpicCard