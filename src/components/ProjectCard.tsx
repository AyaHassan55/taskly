
import EditIcon from '../assets/icons/edit.svg?react'
interface ProjectCardProps {
  name: string;
  description: string;
  createdAt: string;
  onClick?: () => void;
  onEdit?:()=>void;
}

const ProjectCard = ({
  name,
  description,
  createdAt,onClick,onEdit
}: ProjectCardProps) => {
  return (
    <div onClick={onClick} className="flex flex-col justify-between rounded-lg p-6 bg-[#FFFFFF] min-h-55 cursor-pointer ">
      <div>
        <div className="flex items-center  justify-between">
          <h3 className="font-medium text-[#041B3C] text-[18px] leading-7 ">
            {name}
          </h3>
          <button onClick={(e)=>{
            e.stopPropagation();
            onEdit?.()
          }}>
            <EditIcon className='text-primary text-xs w-5 h-5 ' />
          </button>
        </div>
        

        <p className="text-sm text-[#434654] mt-2 leading-[22.75px]">
          {description}
        </p>
      </div>


      <div className="mt-6  ">
        <div className="flex justify-between border-t border-[#C3C6D61A] pt-4  ">
          <p className="font-bold text-[11px] text-[#667085] tracking-[-0.55px] leading-[16.5px]">CREATED AT</p>
          <p className="text-[#434654] font-medium text-[14px] leading-5 ">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;