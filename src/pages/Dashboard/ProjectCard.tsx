

interface ProjectCardProps {
  name: string;
  description: string;
  createdAt: string;
}

const ProjectCard = ({
  name,
  description,
  createdAt,
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-[#EAECF0]">
      <h3 className="font-semibold text-[#041B3C]">
        {name}
      </h3>

      <p className="text-sm text-[#667085] mt-2">
        {description}
      </p>

      <div className="flex justify-between mt-4 text-xs text-[#667085]">
        <span>CREATED AT</span>
        <span>{createdAt}</span>
      </div>
    </div>
  );
};

export default ProjectCard;