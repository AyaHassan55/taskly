import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/Routes";
import ArrowRight from "../../assets/icons/Icon_rarrow.svg?react"
import InviteMember from "../../assets/icons/Icon-project-member.svg?react"
interface ProjectPageHeaderProps {
  projectName: string;
  pageTitle: string;
  currentPage: string;
  showInviteButton?: boolean;
}

const ProjectPageHeader = ({
  projectName,
  pageTitle,
  currentPage,
  showInviteButton = true,
}: ProjectPageHeaderProps) => {
  return (
    <div className="hidden md:flex items-end justify-between">
      <div>
        <div className="flex items-center gap-4 mb-2">
          <Link
            to={ROUTES.PROJECTS}
            className="text-xs font-bold uppercase text-[#43465499]"
          >
            PROJECTS
          </Link>

          <ArrowRight className="w-[3.7px] h-1.5 text-[#43465466]" />

          <span className="text-xs font-bold uppercase text-[#43465499]">
            {projectName}
          </span>

          <ArrowRight className="w-[3.7px] h-1.5 text-[#43465466]" />

          <span className="text-xs font-bold uppercase text-[#003D9B]">
            {currentPage}
          </span>
        </div>

        <h1 className="text-[36px] font-semibold text-[#041B3C] leading-10 tracking-[-0.9px]">
          {pageTitle}
        </h1>
      </div>

      {showInviteButton && (
        <button
          className="flex justify-center gap-2 rounded-xs items-center
          md:py-3 md:px-6 bg-linear-to-br from-[#003D9B] to-[#0052CC]
          shadow-[0px_1px_2px_0_#0000000D] cursor-pointer"
        >
          <InviteMember className="w-[18.33px] h-[13.33px] text-white" />

          <span className="text-sm font-bold text-white">
            Invite Member
          </span>
        </button>
      )}
    </div>
  );
};

export default ProjectPageHeader;