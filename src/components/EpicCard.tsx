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
        <div className="rounded-md p-6  border border-transparent border-l-4 border-l-[#004E32] bg-[#FFFFFF]" onClick={onClick}>
            {/* ------badge--------- */}
            <div className="flex items-center justify-between">
                <h4 className="  text-[10px] font-bold leading-3.75 tracking-[0.5px] text-[#005235] bg-[#82F9BE]
                               border border-transparent rounded-xs py-1 px-2.5 text-center ">
                    {epic.epic_id}
                </h4>
                <DotsIcon className="cursor-pointer" />
            </div>
             {/* avatar and name */}
            <h3 className="text-[#041B3C] font-semibold text-[20px] leading-7 pb-3 mt-3 ">{epic.title}</h3>
            <div className="flex items-center">
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
            {/* created by $ date  */}
            <div className="flex mt-12 justify-between border-t border-t-[#e9eaf07a]">
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