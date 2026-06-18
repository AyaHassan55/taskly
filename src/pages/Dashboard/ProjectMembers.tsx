import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Cookies from "js-cookie";
import getProjectMembers from "../../services/get-members.service";
import type { ProjectMember } from "../../types/project-members";
import { getAvatarLetters } from "../../utils/get-avatar-letter";
import getProjectById from "../../services/projects/get-project-by-id.service";
import toast from "react-hot-toast";
import MoreActionIcon from "../../assets/icons/moreActionIcon.svg?react"
import ProjectPageHeader from "../../components/ui/proiectPageHeader";
interface IProps {



}

const ProjectMembers = ({ }: IProps) => {
  const { projectId } = useParams();

  const [members, setMembers] = useState<ProjectMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [projectName, setProjectName] = useState("");
  // role styles
  const roleStyles = {
    owner: "bg-[#0052CC] text-[white] ",
    admin: "bg-[#CDDDFF] text-[#51617E]",
    member: "bg-[#D7E2FF] text-[#434654]",
    viewer: "bg-[#E8EDFF] text-[#434654]",
  };
  const cellAddress = "py-5 px-8 text-[#434654] text-[11px] font-bold leading-[100%] tracking-[1.1px] uppercase"
  // get members
  useEffect(() => {
    const fetchMembers = async () => {
      const token = Cookies.get("access_token");
      if (!token || !projectId) return;

      try {
        setLoading(true);
        const data = await getProjectMembers(token, projectId);
        setMembers(data)

      } catch (err: any) {
        setError("Failed to load project members. Please try again.")

      } finally {
        setLoading(false)
      }

    }
    fetchMembers()
  }, [projectId])
  //  get project by id
  useEffect(() => {
    const fetchProject = async () => {
      const token = Cookies.get("access_token");

      if (!token || !projectId) return;

      try {
        const project = await getProjectById(token, projectId);
        setProjectName(project.name)



      } catch {
        toast.error("Failed to load project");
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return "members loading"
  }
  if (error) {
    return 'error'
  }
  return (
    <div>
      {/* breadcrumbs */}
      {/* creadcrumps and header  */}
      <ProjectPageHeader
        projectName={projectName}
        pageTitle="Project Members"
        currentPage="Members"
      />

      {/* table */}
      <div className="mt-16 mx-auto w-3xl border border-[#E6EAF2] shadow-[0px_1px_2px_0px_#0000000D]  bg-white rounded-lg overflow-hidden ">

        <table className="w-full">
          <thead className=" bg-[#e0fff84d]">
            <tr className="">
              <th className={`text-left ${cellAddress}`}>Member</th>
              <th className={`text-left  ${cellAddress}`}>Role</th>
              <th className={`text-right ${cellAddress}`}>Actions</th>
            </tr>
          </thead>
          <tbody className="mx-auto pl-8 gap-8">
            {members.map((member: ProjectMember) => (
              <tr
                key={member.member_id}
                className=""
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="text-xs font-semibold text-blue-700">
                        {getAvatarLetters(member.metadata.name)}

                      </span>
                    </div>

                    <div>
                      <p className="font-medium">
                        {member.metadata.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {member.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-xl  font-bold text-[10px] leading-[100%] tracking-[0.5px] ${roleStyles[
                      member.role.toLowerCase() as keyof typeof roleStyles
                      ]
                      }`}
                  >
                    {member.role.toUpperCase()}
                  </span>
                </td>

                 <td className="py-4 px-6">
                    <div className="flex justify-end">
                      {member.role !== 'owner' && (
                        <button
                          className="p-2 hover:bg-surface-low rounded transition-colors"
                          aria-label="Member actions"
                        >
                          <MoreActionIcon className="w-5 h-5 text-slate-medium" />
                        </button>
                      )}
                    </div>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  )
}

export default ProjectMembers