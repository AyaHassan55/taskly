import EpicEmpty from "../../../assets/images/epic-empty.svg?react"
import CreateEpicIcon from "../../../assets/icons/create-epic-icon.svg?react"
import GoalsIcon from "../../../assets/icons/goals-Icon.svg?react"
import HirecDesignIcon from "../../../assets/icons/hirec-design-Icon.svg?react"
import TrackVeloIcon from "../../../assets/icons/track-velo-Icon.svg?react"
import {  useNavigate } from "react-router-dom"
import { PATHS } from "../../../constants/Routes"
interface IProps {
projectId:string;


}

const EmptyEpic = ({projectId}: IProps) => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#F9F9FF]">
            <div className="mx-w-[672px] flex flex-col items-center gap-3">
                <EpicEmpty />
                <h2 className="text-[30px] text-[#041B3C] font-semibold leading-9 tracking-[-0.75px] text-center ">No epics in this project yet.</h2>
                <p className="text-[18px] text-[#434654] font-normal leading-[29.25px] text-center ">Break down your large project into manageable
                    epics to track progress better and maintain
                    architectural clarity.
                </p>
                <button
                    onClick={() => navigate(PATHS.addEpic(projectId))}

                    className="flex justify-center gap-2 rounded-xs items-center py-3 px-6 
                                bg-linear-to-br from-[#003D9B] to-[#0052CC] shadow_[0px_25px_50px_-12px_#003D9B4D] cursor-pointer">

                    <CreateEpicIcon className='w-[18.33px] h-[13.33px] text-[#FFFFFF] ' />
                    <span className="text-[18px] font-bold  text-[#FFFFFF] leading-7  ">
                        Create First Epic
                    </span>
                </button>
                <section className="flex flex-col sm:flex-row items-stretch gap-6 mt-10">
                    <div className="w-full sm:w-72 p-6 bg-[#F1F3FF] space-y-3 rounded-md">
                        <div className="bg-white p-2.5 w-10 h-10 rounded flex items-center justify-center">
                            <GoalsIcon className="w-5 h-5 text-primary" />
                        </div>
                        <h5 className="text-slate-dark text-title-md">
                            High-Level Goals
                        </h5>
                        <p className="text-slate-medium text-body-md">
                            Define the broad objectives that span across multiple cycles.
                        </p>
                    </div>
                    <div className="w-full sm:w-72 p-6 bg-[#F1F3FF] space-y-3 rounded-md">
                        <div className="bg-white p-2.5 w-10 h-10 rounded flex items-center justify-center">
                            <HirecDesignIcon className="w-5 h-5 text-primary" />
                        </div>
                        <h5 className="text-slate-dark text-title-md">
                            Hierarchy Design
                        </h5>
                        <p className="text-slate-medium text-body-md">
                            Link individual tasks to parent epics for a consolidated view.
                        </p>
                    </div>
                    <div className="w-full sm:w-72 p-6 bg-[#F1F3FF] space-y-3 rounded-md">
                        <div className="bg-white p-2.5 w-10 h-10 rounded flex items-center justify-center">
                            <TrackVeloIcon className="w-5 h-5 text-primary" />
                        </div>
                        <h5 className="text-slate-dark text-title-md">Track Velocity</h5>
                        <p className="text-slate-medium text-body-md">
                            Visualize percentage completion at a macro project level.
                        </p>
                    </div>
                </section>
            </div>


        </div>
    )
}

export default EmptyEpic